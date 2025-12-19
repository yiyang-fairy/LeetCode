// ==UserScript==
// @name         力扣题目提取器
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  在力扣题目页面添加提取按钮，自动生成格式化的代码
// @author       You
// @match        https://leetcode.cn/problems/*
// @match        https://leetcode-cn.com/problems/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 创建提取按钮
    function createExtractButton() {
        // 先移除已存在的按钮容器
        const existingContainer = document.getElementById('leetcode-extract-container');
        if (existingContainer) {
            existingContainer.remove();
        }
        
        const existingButton = document.getElementById('leetcode-extract-btn');
        if (existingButton) {
            existingButton.remove();
        }

        const button = document.createElement('button');
        button.id = 'leetcode-extract-btn';
        button.textContent = '📋 提取题目';
        button.style.cssText = `
            background: #007bff;
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 13px;
            margin-left: 8px;
            height: 32px;
            display: inline-flex;
            align-items: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.2);
            transition: background-color 0.2s;
        `;
        
        // 鼠标悬停效果
        button.addEventListener('mouseenter', () => {
            button.style.background = '#0056b3';
        });
        button.addEventListener('mouseleave', () => {
            button.style.background = '#007bff';
        });
        
        button.addEventListener('click', extractLeetCodeData);
        
        // 寻找合适的插入位置
        insertButtonToToolbar(button);
    }

    // 将按钮插入到工具栏
    function insertButtonToToolbar(button) {
        // 寻找指定的导航栏元素
        const targetNavbar = findTargetNavbar();
        
        if (targetNavbar) {
            insertButtonAfterNavbar(button, targetNavbar);
            return;
        }

        // 备用方案：尝试其他可能的工具栏位置
        const toolbarSelectors = [
            // 题目页面顶部工具栏
            '.css-1jqueqk', // 新版UI
            '.question-info__JoQx', // 旧版UI
            '.css-v3d350', // 标题容器
            '[data-cy="question-title"]', // 标题元素
            '.flex.items-center.space-x-4', // 通用flex容器
            '.question-title', // 题目标题区域
            'div[class*="question"]', // 包含question的div
            'div[class*="title"]', // 包含title的div
        ];

        let inserted = false;
        
        for (const selector of toolbarSelectors) {
            const toolbar = document.querySelector(selector);
            if (toolbar) {
                // 检查是否已经插入过按钮
                if (!toolbar.querySelector('#leetcode-extract-btn')) {
                    // 如果是标题元素，找其父容器
                    if (selector.includes('title')) {
                        const parent = toolbar.parentElement;
                        if (parent && parent.style.display !== 'none') {
                            // 创建按钮容器
                            const container = document.createElement('div');
                            container.style.cssText = 'display: inline-flex; align-items: center; margin-left: 16px;';
                            container.appendChild(button);
                            parent.appendChild(container);
                            inserted = true;
                            break;
                        }
                    } else {
                        // 直接插入到工具栏
                        toolbar.style.display = 'flex';
                        toolbar.style.alignItems = 'center';
                        toolbar.appendChild(button);
                        inserted = true;
                        break;
                    }
                }
            }
        }

        // 如果都没找到合适位置，尝试插入到页面顶部
        if (!inserted) {
            insertButtonToHeader(button);
        }
    }

    // 寻找目标导航栏元素
    function findTargetNavbar() {
        // 方法1：寻找包含特定类名和"题库"文本的导航栏
        const navSelectors = [
            'div.lc-md\\:flex .group.flex',
            'div[class*="lc-md:flex"]',
            'div[class*="group"][class*="flex"][class*="max-w-"]',
            'div[class*="overflow-hidden"][class*="rounded"]'
        ];

        for (const selector of navSelectors) {
            const navElements = document.querySelectorAll(selector);
            for (const nav of navElements) {
                // 检查是否包含"题库"文本
                const titleElement = Array.from(nav.querySelectorAll('div')).find(div => 
                    div.textContent.trim() === '题库' || div.textContent.includes('题库')
                );
                
                // 检查是否有左右箭头按钮
                const hasLeftArrow = nav.querySelector('svg[data-icon="chevron-left"]');
                const hasRightArrow = nav.querySelector('svg[data-icon="chevron-right"]');
                const hasShuffleIcon = nav.querySelector('svg[data-icon="shuffle"]');
                
                if (titleElement && (hasLeftArrow || hasRightArrow || hasShuffleIcon)) {
                    return nav;
                }
            }
        }

        // 方法2：通过具体的SVG图标查找导航栏
        const shuffleIcon = document.querySelector('svg[data-icon="shuffle"]');
        if (shuffleIcon) {
            let current = shuffleIcon;
            // 向上查找包含完整导航栏的容器
            while (current && current.tagName !== 'BODY') {
                current = current.parentElement;
                if (current && current.textContent.includes('题库') && 
                    current.querySelector('svg[data-icon="chevron-left"]') &&
                    current.querySelector('svg[data-icon="chevron-right"]')) {
                    return current;
                }
            }
        }

        // 方法3：通过左右箭头查找
        const leftArrow = document.querySelector('svg[data-icon="chevron-left"]');
        const rightArrow = document.querySelector('svg[data-icon="chevron-right"]');
        
        if (leftArrow && rightArrow) {
            // 找到共同的父容器
            let leftParent = leftArrow;
            while (leftParent && leftParent.tagName !== 'BODY') {
                leftParent = leftParent.parentElement;
                if (leftParent && leftParent.contains(rightArrow) && leftParent.textContent.includes('题库')) {
                    return leftParent;
                }
            }
        }

        return null;
    }

    // 在导航栏后插入按钮
    function insertButtonAfterNavbar(button, navbar) {
        // 调整按钮样式以匹配导航栏风格
        button.style.cssText = `
            background: #007bff;
            color: white;
            border: none;
            padding: 6px 10px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 12px;
            font-weight: 500;
            height: 28px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.2s;
            flex-none;
            white-space: nowrap;
        `;

        // 创建分隔线元素，与导航栏中的分隔线样式一致
        const separator = document.createElement('div');
        separator.style.cssText = `
            height: 28px;
            width: 1px;
            flex-none;
            background: rgb(229, 231, 235);
            margin: 0 4px;
        `;

        // 创建按钮容器
        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = `
            display: flex;
            align-items: center;
            height: 32px;
            padding: 0 4px;
        `;
        buttonContainer.appendChild(button);

        // 创建完整的容器，包含分隔线和按钮
        const fullContainer = document.createElement('div');
        fullContainer.id = 'leetcode-extract-container';
        fullContainer.style.cssText = `
            display: flex;
            align-items: center;
            height: 32px;
        `;
        fullContainer.appendChild(separator);
        fullContainer.appendChild(buttonContainer);

        // 尝试多种插入方式
        let inserted = false;

        // 方式1：插入到导航栏容器后面
        const parent = navbar.parentElement;
        if (parent && !parent.querySelector('#leetcode-extract-container')) {
            navbar.insertAdjacentElement('afterend', fullContainer);
            inserted = true;
        }

        // 方式2：如果没有成功，尝试插入到导航栏内部的末尾
        if (!inserted && !navbar.querySelector('#leetcode-extract-container')) {
            // 检查导航栏是否为flex容器
            const computedStyle = window.getComputedStyle(navbar);
            if (computedStyle.display === 'flex' || navbar.className.includes('flex')) {
                navbar.appendChild(fullContainer);
                inserted = true;
            }
        }

        // 方式3：作为最后备选，直接添加到导航栏后面，不使用分隔线
        if (!inserted) {
            buttonContainer.style.marginLeft = '12px';
            navbar.insertAdjacentElement('afterend', buttonContainer);
        }

        console.log('按钮已插入到导航栏', inserted ? '成功' : '备用方式');
    }

    // 插入到页面顶部
    function insertButtonToHeader(button) {
        // 寻找页面头部区域
        const headerSelectors = [
            'header',
            '.navbar',
            '.header',
            'div[class*="header"]',
            'div[class*="nav"]'
        ];

        for (const selector of headerSelectors) {
            const header = document.querySelector(selector);
            if (header) {
                const container = document.createElement('div');
                container.style.cssText = `
                    position: absolute;
                    top: 10px;
                    right: 20px;
                    z-index: 1000;
                `;
                container.appendChild(button);
                header.style.position = 'relative';
                header.appendChild(container);
                return;
            }
        }

        // 最后的备选方案：固定定位
        button.style.position = 'fixed';
        button.style.top = '80px';
        button.style.right = '20px';
        button.style.zIndex = '9999';
        document.body.appendChild(button);
    }

    // 提取力扣题目数据
    function extractLeetCodeData() {
        try {
            // 获取题目标题
            const titleElement = document.querySelector('[data-cy="question-title"]') || 
                                document.querySelector('.css-v3d350') ||
                                document.querySelector('div[class*="question-title"]') ||
                                document.querySelector('h1');
            const title = titleElement ? titleElement.textContent.trim() : '未知题目';

            // 获取题目描述
            const descElement = document.querySelector('[data-track-load="description_content"]') ||
                              document.querySelector('.notranslate') ||
                              document.querySelector('div[class*="question-content"]') ||
                              document.querySelector('.question-description');
            
            let description = '';
            if (descElement) {
                // 清理HTML标签，保留文本内容
                description = descElement.innerText || descElement.textContent || '';
                description = description.replace(/\n\s*\n/g, '\n\n').trim();
            }

            // 获取代码区内容
            let codeContent = '';
            const codeEditor = document.querySelector('.monaco-editor') ||
                             document.querySelector('textarea[data-cy="code-editor"]') ||
                             document.querySelector('.CodeMirror-code');
            
            if (codeEditor) {
                // 尝试从Monaco编辑器获取
                const lines = codeEditor.querySelectorAll('.view-line');
                if (lines.length > 0) {
                    codeContent = Array.from(lines).map(line => line.textContent).join('\n');
                } else {
                    // 备用方法
                    codeContent = codeEditor.textContent || codeEditor.value || '';
                }
            }

            // 如果没有找到代码，尝试其他选择器
            if (!codeContent) {
                const textarea = document.querySelector('textarea');
                if (textarea) {
                    codeContent = textarea.value;
                }
            }

            // 处理代码内容
            codeContent = processCode(codeContent);

            // 生成测试用例
            const testCases = generateTestCases(description, title, codeContent);

            // 组合最终内容
            const finalContent = `/**
 * ${description.replace(/\*/g, '*')}
 */

${codeContent}

${testCases}`;

            // 复制到剪贴板
            copyToClipboard(finalContent);
            
            // 显示成功提示
            showNotification('✅ 题目内容已复制到剪贴板！');
            
        } catch (error) {
            console.error('提取失败:', error);
            showNotification('❌ 提取失败，请检查页面内容');
        }
    }

    // 处理代码内容
    function processCode(code) {
        if (!code) {
            return `const solution = function() {
    // TODO: 实现代码
};`;
        }

        // 将 var 替换为 const
        let processedCode = code.replace(/\bvar\b/g, 'const');
        
        // 如果代码不包含函数定义，添加基础结构
        if (!processedCode.includes('function') && !processedCode.includes('=>')) {
            processedCode = `const solution = function() {
    ${processedCode}
};`;
        }

        return processedCode;
    }

    // 生成测试用例
    function generateTestCases(description, title, codeContent) {
        const testCases = [];
        
        // 从代码中提取函数名
        const functionName = extractFunctionName(codeContent);
        
        // 从题目描述中提取示例
        const examples = extractExamples(description);
        
        if (examples.length > 0) {
            examples.forEach((example, index) => {
                testCases.push(`console.log('测试用例${index + 1}', ${functionName}(${example.input}));  //${example.output}`);
            });
        } else {
            // 如果没找到示例，生成默认测试
            testCases.push(`console.log('测试用例1', ${functionName}());  // 期望输出`);
        }

        return testCases.join('\n');
    }

    // 从代码中提取函数名
    function extractFunctionName(code) {
        // 匹配 const functionName = function
        let match = code.match(/const\s+(\w+)\s*=\s*function/);
        if (match) return match[1];
        
        // 匹配 function functionName
        match = code.match(/function\s+(\w+)\s*\(/);
        if (match) return match[1];
        
        // 匹配 const functionName = (...) =>
        match = code.match(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>/);
        if (match) return match[1];
        
        // 默认返回 solution
        return 'solution';
    }

    // 从描述中提取示例
    function extractExamples(description) {
        const examples = [];
        
        // 匹配示例格式
        const exampleRegex = /示例\s*\d*[：:]\s*输入[：:]?\s*([^\n]+)\s*输出[：:]?\s*([^\n]+)/gi;
        let match;
        
        while ((match = exampleRegex.exec(description)) !== null) {
            const inputText = match[1].trim();
            const outputText = match[2].trim();
            
            // 解析输入参数
            const parsedInput = parseInputParameters(inputText);
            const parsedOutput = parseOutputValue(outputText);
            
            examples.push({
                input: parsedInput,
                output: parsedOutput
            });
        }

        // 备用匹配方式
        if (examples.length === 0) {
            const inputRegex = /输入[：:]?\s*([^\n]+)/gi;
            const outputRegex = /输出[：:]?\s*([^\n]+)/gi;
            
            const inputs = [];
            const outputs = [];
            
            let inputMatch;
            while ((inputMatch = inputRegex.exec(description)) !== null) {
                inputs.push(inputMatch[1].trim());
            }
            
            let outputMatch;
            while ((outputMatch = outputRegex.exec(description)) !== null) {
                outputs.push(outputMatch[1].trim());
            }
            
            for (let i = 0; i < Math.min(inputs.length, outputs.length); i++) {
                const parsedInput = parseInputParameters(inputs[i]);
                const parsedOutput = parseOutputValue(outputs[i]);
                
                examples.push({
                    input: parsedInput,
                    output: parsedOutput
                });
            }
        }

        return examples;
    }

    // 解析输入参数
    function parseInputParameters(inputText) {
        const params = [];
        const processedIndices = new Set();
        
        // 匹配数组参数,支持多维数组 nums = [[1,2],[3,4]]
        const arrayRegex = /(\w+)\s*=\s*(\[)/g;
        let arrayMatch;
        
        while ((arrayMatch = arrayRegex.exec(inputText)) !== null) {
            const paramName = arrayMatch[1];
            const startIndex = arrayMatch.index + arrayMatch[0].length - 1; // '[' 的位置
            
            // 使用栈来匹配完整的数组
            let bracketCount = 0;
            let endIndex = startIndex;
            
            for (let i = startIndex; i < inputText.length; i++) {
                if (inputText[i] === '[') bracketCount++;
                if (inputText[i] === ']') bracketCount--;
                
                if (bracketCount === 0) {
                    endIndex = i;
                    break;
                }
            }
            
            const arrayValue = inputText.substring(startIndex, endIndex + 1);
            params.push(arrayValue);
            
            // 记录已处理的参数
            for (let i = arrayMatch.index; i <= endIndex; i++) {
                processedIndices.add(i);
            }
        }
        
        // 匹配普通参数 k = 2
        const paramRegex = /(\w+)\s*=\s*([^\s,，]+)/g;
        let paramMatch;
        while ((paramMatch = paramRegex.exec(inputText)) !== null) {
            const matchIndex = paramMatch.index;
            
            // 跳过已经处理的数组参数
            if (processedIndices.has(matchIndex)) continue;
            
            const paramName = paramMatch[1];
            const paramValue = paramMatch[2];
            
            // 跳过数组参数(已在上面处理)
            if (paramValue.startsWith('[')) continue;
            
            // 如果是字符串，加引号
            if (isNaN(paramValue) && !paramValue.includes('"') && !paramValue.includes("'")) {
                params.push(`"${paramValue}"`);
            } else {
                params.push(paramValue);
            }
        }
        
        return params.join(', ');
    }

    // 解析输出值
    function parseOutputValue(outputText) {
        // 提取数字或数组
        const match = outputText.match(/\d+|\[[^\]]+\]/);
        return match ? match[0] : outputText.trim();
    }

    // 复制到剪贴板
    function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text);
        } else {
            // 备用方法
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
    }

    // 显示通知
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 70px;
            right: 20px;
            z-index: 10000;
            background: #28a745;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            font-size: 14px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    }

    // 页面加载完成后创建按钮
    function init() {
        // 等待页面加载
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(createExtractButton, 1500);
            });
        } else {
            // 延迟创建，确保页面元素已加载
            setTimeout(createExtractButton, 1500);
        }
    }

    // 重试创建按钮
    function retryCreateButton() {
        let attempts = 0;
        const maxAttempts = 10;
        
        const retry = () => {
            attempts++;
            createExtractButton();
            
            // 检查按钮是否成功插入
            const button = document.getElementById('leetcode-extract-btn');
            if (!button && attempts < maxAttempts) {
                setTimeout(retry, 1000);
            }
        };
        
        retry();
    }

    // 初始化
    init();

    // 监听DOM变化，确保按钮始终存在
    const observer = new MutationObserver((mutations) => {
        // 检查URL是否变化（SPA路由）
        if (location.href !== currentUrl) {
            currentUrl = location.href;
            setTimeout(retryCreateButton, 2000);
        }
        
        // 检查按钮是否还在页面中
        const button = document.getElementById('leetcode-extract-btn');
        const container = document.getElementById('leetcode-extract-container');
        if (!button && !container && location.href.includes('/problems/')) {
            setTimeout(createExtractButton, 500);
        }
    });

    // 开始监听
    let currentUrl = location.href;
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 页面可见性变化时重新检查
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && location.href.includes('/problems/')) {
            setTimeout(() => {
                const button = document.getElementById('leetcode-extract-btn');
                const container = document.getElementById('leetcode-extract-container');
                if (!button && !container) {
                    createExtractButton();
                }
            }, 1000);
        }
    });

})();