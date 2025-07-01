# LearnGarden 公司入口網站

一個專業、現代化且具有可擴充性的公司入口網站，專為展示多個應用程式作品而設計。

## 🌟 特色功能

- **響應式設計**：適配所有裝置（桌面、平板、手機）
- **現代化UI**：使用漸變色彩和動畫效果
- **可擴充架構**：輕鬆添加新的應用程式作品
- **平滑滾動**：優雅的頁面導航體驗
- **互動效果**：滑鼠視差和懸停動畫
- **載入動畫**：提升用戶體驗
- **SEO優化**：良好的搜索引擎優化

## 📁 項目結構

```
LearnGarden/
├── index.html          # 主頁面
├── css/
│   └── style.css       # 樣式文件
├── js/
│   └── main.js         # JavaScript功能
├── assets/             # 圖片和其他資源（預留）
└── README.md          # 說明文件
```

## 🚀 快速開始

1. **打開網站**
   - 直接在瀏覽器中打開 `index.html`
   - 或使用本地服務器（推薦）

2. **本地開發服務器**（可選）
   ```bash
   # 使用Python的簡單HTTP服務器
   python -m http.server 8000
   
   # 或使用Node.js的http-server
   npx http-server
   ```

## 📖 頁面結構

### 導航欄
- 固定在頁面頂部
- 透明背景和毛玻璃效果
- 響應式手機選單

### 主要區域
1. **英雄區域**：品牌介紹和主要行動呼籲
2. **作品展示**：動態載入的項目卡片
3. **關於我們**：公司介紹和特色
4. **聯繫我們**：聯繫資訊

## 🔧 添加新項目

### 方法一：直接編輯JavaScript文件

在 `js/main.js` 中找到 `projects` 陣列，添加新項目：

```javascript
const projects = [
    // 現有項目...
    {
        id: 2,
        title: "新項目名稱",
        description: "項目的詳細描述，說明功能和特色...",
        tags: ["HTML", "CSS", "JavaScript", "React"],
        icon: "fas fa-laptop-code",        // FontAwesome圖標
        liveUrl: "https://your-project-url.com",
        githubUrl: "https://github.com/your-repo",
        featured: false,                    // 是否為精選作品
        category: "Web應用"
    }
];
```

### 方法二：使用JavaScript API（開發者）

```javascript
// 添加新項目
const projectManager = new ProjectManager();
projectManager.addProject({
    title: "新項目",
    description: "項目描述",
    tags: ["技術標籤"],
    icon: "fas fa-icon",
    liveUrl: "項目網址",
    githubUrl: "GitHub網址",
    featured: false,
    category: "項目類別"
});
```

## 🎨 自訂樣式

### 色彩主題
在 `css/style.css` 中的 `:root` 區塊修改色彩變數：

```css
:root {
    --primary-color: #667eea;      /* 主色調 */
    --secondary-color: #764ba2;    /* 次要色調 */
    --accent-color: #f093fb;       /* 強調色 */
    --text-color: #333;            /* 文字顏色 */
    --text-light: #666;            /* 淺色文字 */
}
```

### 修改公司資訊
1. **公司名稱**：在 `index.html` 中搜索 "LearnGarden" 並替換
2. **聯繫資訊**：修改聯繫我們區塊的內容
3. **關於我們**：更新公司介紹文字

## 📱 響應式設計

網站已針對以下斷點進行優化：
- **桌面**：> 768px
- **平板**：768px 以下
- **手機**：480px 以下

## 🔍 SEO優化

已包含的SEO元素：
- 語義化HTML結構
- Meta標籤設定
- 適當的標題層級
- Alt屬性（圖片）
- 結構化數據準備

## 🚀 性能優化

- CSS和JavaScript檔案分離
- 使用CDN載入字體和圖標
- 圖片延遲載入（可擴展）
- 動畫使用硬體加速

## 🛠️ 技術架構

### 前端技術
- **HTML5**：語義化標記
- **CSS3**：現代化樣式和動畫
- **JavaScript ES6+**：模組化程式設計
- **FontAwesome**：圖標庫
- **Google Fonts**：網頁字體

### 設計模式
- **模組化**：組件式架構
- **響應式**：Mobile-first設計
- **漸進增強**：基礎功能優先

## 📈 未來擴展計劃

### 可添加的功能
1. **項目篩選**：按類別或技術標籤篩選
2. **搜索功能**：項目搜索和排序
3. **管理後台**：動態添加/編輯項目
4. **多語言支援**：國際化功能
5. **深色模式**：主題切換功能
6. **動畫庫**：更豐富的動畫效果

### 整合建議
1. **分析工具**：Google Analytics
2. **聊天功能**：客戶服務系統
3. **表單處理**：聯繫表單後端
4. **CMS整合**：內容管理系統

## 🐛 故障排除

### 常見問題

1. **項目卡片不顯示**
   - 檢查JavaScript控制台是否有錯誤
   - 確認 `projects` 陣列格式正確

2. **樣式不生效**
   - 檢查CSS檔案路徑
   - 確認瀏覽器快取已清除

3. **手機選單無法打開**
   - 檢查JavaScript是否正確載入
   - 確認DOM元素ID正確

## 📝 更新紀錄

### v1.0.0 (2024)
- 初始版本發布
- 基礎響應式設計
- 項目展示功能
- 動畫和互動效果

## 📞 支援

如需技術支援或有任何問題，請聯繫：
- Email: sphere889889@gmail.com
- GitHub: [henryhan168](https://github.com/henryhan168)

## 📄 授權條款

本項目採用 MIT 授權條款。

---

**LearnGarden** - 創新數位解決方案 ✨ 