// ==UserScript==
// @name         VSCode Marketplace VSIX Downloader
// @namespace    https://github.com/cheluen
// @version      0.1
// @description  在插件详情页的 Version History 表格中为每个版本添加 VSIX 下载功能
// @author       cheluen
// @match        https://marketplace.visualstudio.com/items*
// @icon         https://code.visualstudio.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
  
    /* -------------------------------------------------------- */
    /* 0. 当前扩展 publisher/extension */
    /* -------------------------------------------------------- */
    const itemName = new URL(location.href).searchParams.get('itemName');
    if (!itemName) return;
    const [publisher, extension] = itemName.split('.');
  
    function buildDownloadUrl(v) {
      return `https://marketplace.visualstudio.com/_apis/public/gallery/publishers/${publisher}/vsextensions/${extension}/${v}/vspackage`;
    }
  
    /* -------------------------------------------------------- */
    /* 1. 内嵌 SVG 图标（蓝色向下箭头，兼容深浅色主题） */
    /* -------------------------------------------------------- */
    const iconSvg =
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#007ACC">
           <path d="M8 1v9.586l3.293-3.293 1.414 1.414L8 14.414 3.293 8.707l1.414-1.414L7 10.586V1z"/>
           <path d="M2 15h12v-2H2v2z"/>
         </svg>`
      );
    const iconUrl = `data:image/svg+xml,${iconSvg}`;
  
    /* -------------------------------------------------------- */
    /* 2. 创建下载按钮（图标） */
    /* -------------------------------------------------------- */
    function createButton(version) {
      const link = document.createElement('a');
      link.href = buildDownloadUrl(version);
      link.download = `${extension}-${version}.vsix`;
      link.target = '_blank';
      link.style.cssText = `
        display: inline-block;
        margin-left: 4px;
        width: 16px;
        height: 16px;
        opacity: .9;
      `;
  
      const img = document.createElement('img');
      img.src = iconUrl;
      img.alt = 'Download VSIX';
      img.width = 16;
      img.height = 16;
      img.style.verticalAlign = 'middle';
  
      link.appendChild(img);
  
      /* 悬停、焦点效果 */
      link.addEventListener('mouseenter', () => (link.style.opacity = '1'));
      link.addEventListener('mouseleave', () => (link.style.opacity = '.9'));
  
      return link;
    }
  
    /* -------------------------------------------------------- */
    /* 3. 把按钮插入 Version History 表格 */
    /* -------------------------------------------------------- */
    function injectButtons() {
      const selectors = [
        'table.version-history-table tbody tr',
        'table[aria-label="Version History Table"] tbody tr',
        'table[aria-label="Version history"] tbody tr'
      ];
      const rows = document.querySelectorAll(
        selectors.map(s => `${s}:not([data-vsix-added])`).join(',')
      );
  
      rows.forEach(tr => {
        const cells = tr.querySelectorAll('td');
        if (!cells.length) return;
  
        const version = cells[0].textContent.trim();
        if (!/^[0-9A-Za-z.-]+$/.test(version)) return;
  
        const targetCell = cells[1] || tr;
        targetCell.appendChild(createButton(version));
  
        tr.dataset.vsixAdded = 'true';
      });
    }
  
    /* -------------------------------------------------------- */
    /* 4. 监听 SPA DOM 变化 */
    /* -------------------------------------------------------- */
    const observer = new MutationObserver(injectButtons);
    observer.observe(document.body, { childList: true, subtree: true });
    injectButtons(); // 首次执行
  })();