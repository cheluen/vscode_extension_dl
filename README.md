# VSCode Marketplace VSIX Downloader

[English](#english) | [中文](#中文)

---

## English

A userscript that adds VSIX download buttons to the Version History table on VSCode Marketplace extension pages.

### Features

- Adds a download icon button next to each version in the Version History table
- Directly downloads the `.vsix` package file for any extension version
- Works with the VSCode Marketplace SPA (Single Page Application) via MutationObserver
- Lightweight and non-intrusive design
- Compatible with both light and dark themes

### Installation

1. Install a userscript manager extension in your browser:
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Safari, Opera)
   - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge, Opera)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

2. Click the link below to install the script:
   - [Install from GitHub](https://raw.githubusercontent.com/cheluen/vscode_extension_dl/main/vscode-extension-downloader.user.js)

3. Or manually create a new script in your userscript manager and paste the contents of `vscode-extension-downloader.user.js`

### Usage

1. Navigate to any extension page on [VSCode Marketplace](https://marketplace.visualstudio.com/)
2. Scroll down to the "Version History" section
3. Click the blue download icon next to any version to download that version's `.vsix` file

### Why Use This?

- **Offline Installation**: Install extensions on machines without internet access
- **Version Control**: Keep specific versions of extensions for compatibility
- **Backup**: Maintain backups of your favorite extensions
- **Air-gapped Environments**: Deploy extensions in secure environments

### Compatibility

- Works on: `https://marketplace.visualstudio.com/items*`
- Tested with: Tampermonkey, Violentmonkey
- Browser support: Chrome, Firefox, Edge, and other modern browsers

### License

MIT License

---

## 中文

一个在 VSCode Marketplace 扩展页面的版本历史表格中添加 VSIX 下载按钮的用户脚本。

### 功能特性

- 在版本历史表格的每个版本旁边添加下载图标按钮
- 可直接下载任意版本扩展的 `.vsix` 安装包文件
- 通过 MutationObserver 适配 VSCode Marketplace 单页应用 (SPA)
- 轻量级、无侵入式设计
- 兼容浅色和深色主题

### 安装方法

1. 在浏览器中安装用户脚本管理器扩展：
   - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Safari, Opera)
   - [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge, Opera)
   - [Greasemonkey](https://www.greasespot.net/) (Firefox)

2. 点击以下链接安装脚本：
   - [从 GitHub 安装](https://raw.githubusercontent.com/cheluen/vscode_extension_dl/main/vscode-extension-downloader.user.js)

3. 或者在用户脚本管理器中手动创建新脚本，粘贴 `vscode-extension-downloader.user.js` 的内容

### 使用方法

1. 访问 [VSCode Marketplace](https://marketplace.visualstudio.com/) 上的任意扩展页面
2. 向下滚动到「Version History」（版本历史）部分
3. 点击任意版本旁边的蓝色下载图标即可下载该版本的 `.vsix` 文件

### 使用场景

- **离线安装**：在无法联网的机器上安装扩展
- **版本控制**：保留特定版本的扩展以确保兼容性
- **备份**：备份您喜爱的扩展
- **隔离环境**：在安全隔离的环境中部署扩展

### 兼容性

- 适用网址：`https://marketplace.visualstudio.com/items*`
- 已测试：Tampermonkey、Violentmonkey
- 支持浏览器：Chrome、Firefox、Edge 及其他现代浏览器

### 许可证

MIT License

---

## Author

[cheluen](https://github.com/cheluen)
