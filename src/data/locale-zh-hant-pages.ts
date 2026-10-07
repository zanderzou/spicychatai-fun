import type { LocalizedEdition } from "./localized-pages";

// Traditional Chinese editorial edition. The brand keyword stays in English;
// surrounding copy uses Taiwan-style search and product terminology.
export const zhHantEdition: LocalizedEdition = {
  ui: {
    language: "語言", home: "首頁", start: "從這裡開始", controls: "模型與記憶", compare: "產品比較", blog: "比較文章",
    about: "關於本站", contact: "聯絡我們", editorial: "編輯原則", privacy: "隱私權", terms: "使用條款",
    official: "前往 SpicyChat 官方網站", read: "閱讀比較", sources: "原始資料", verdict: "結論", allArticles: "所有比較文章", more: "延伸閱讀",
    independent: "獨立編輯網站，非 SpicyChat 官方服務", adults: "僅供成年人參考",
    analyticsSettings: "分析資料設定", analyticsTitle: "選擇是否啟用流量分析",
    analyticsBody: "我們希望透過 Google Analytics 了解文章的使用情況；不作廣告追蹤。只有取得你的同意才會載入分析工具。",
    analyticsDecline: "不同意", analyticsAccept: "同意分析", analyticsPrivacy: "隱私權說明",
    analyticsStatusPrivacy: "已遵守瀏覽器的隱私訊號，分析工具維持關閉。",
    analyticsStatusOn: "分析工具已開啟。按「不同意」即可撤回同意。",
    analyticsStatusOff: "分析工具未啟用；這項選擇只適用於本站。",
    skip: "跳至主要內容", navigation: "主要導覽", menu: "開啟選單", closeMenu: "關閉選單",
  },
  home: {
    description: "Spicy Chat AI 繁體中文獨立解析：角色扮演、AI 角色建立、模型與記憶差異、現行方案、內容規範及五款替代服務的實用比較。",
    hero: {
      kicker: "獨立研究・成年人閱讀",
      tagline: "好故事，不只靠角色數量。",
      body: "從角色設定、對話模型與上下文，到記憶功能、方案限制及安全規則，找出 SpicyChat 真正適合你的使用方式。",
      primary: "查看比較方法", secondary: "閱讀五篇 VS 比較",
    },
    intro: {
      kicker: "01 / 先釐清服務",
      heading: "Spicy Chat AI 值得怎麼看？",
      lead: "SpicyChat 是與虛構 AI 角色對話、創作情節的服務；本站提供選擇與比較資訊，並沒有聊天、上傳圖片或付款功能。",
      body: "第一次使用時，漂亮的角色圖可能最吸睛，但長篇角色扮演還取決於開場設定、角色動機、所選模型、可用上下文、個人角色設定與記憶。把「成人向」誤解成毫無規範，或把畫面上的完整對話紀錄當成模型每次都能讀到的內容，都容易做出錯誤選擇。",
    },
    journey: {
      kicker: "02 / 三個起點",
      heading: "找角色、寫角色，再調整對話",
      description: "先用簡短的虛構場景試用，比先買最長的訂閱方案更能看出你需要哪一項功能。",
      cards: [
        { label: "探索", heading: "不要只看封面", body: "讀角色介紹與第一則訊息：有沒有明確的處境、目標，以及讓故事繼續的線索？" },
        { label: "創作", heading: "讓人物有動機", body: "與其堆疊「溫柔、聰明、迷人」，不如交代角色想做什麼、避免什麼，以及說話習慣。人物必須是虛構成年人。" },
        { label: "設定", heading: "一次改一個變數", body: "保留相同的開場，依序比較模型、個人角色設定和上下文，才知道差異來自哪裡。" },
      ],
    },
    controls: {
      kicker: "03 / 影響回應的設定",
      heading: "把模型、上下文和記憶分開看",
      description: "SpicyChat 的官方方案表把一般上下文、Memory Manager 與 Semantic Memory 2.0 列為不同項目；不要統稱為「記性好」。",
      cards: [
        { label: "角色", heading: "設定與開場", body: "清楚交代人物關係和當下事件，比只有外貌與形容詞更容易測試角色是否一致。" },
        { label: "模型", heading: "敘事風格", body: "各方案可用模型可能不同；以同一段虛構故事比較節奏、細節與重複情形。" },
        { label: "上下文", heading: "當下能參照什麼", body: "歷史紀錄仍看得到，不代表每一則舊訊息都在這次生成的上下文裡。" },
        { label: "記憶", heading: "保存的重要事實", body: "Memory Manager 和 Semantic Memory 2.0 的適用方案不同，應分別確認編輯與刪除方式。" },
        { label: "方案", heading: "功能與花費", body: "圖片、語音、進階模型和生成設定可能分屬不同方案；以目前的官方表與結帳頁為準。" },
      ],
    },
    test: {
      kicker: "04 / 可重複的小測試",
      heading: "用同一段故事檢查一致性",
      description: "以下是讀者可自行操作的方法，不是本站已替每個模型跑過的實測排名。避免輸入真人資料或私密對話。",
      steps: [
        { heading: "設定兩件無害的小事", body: "例如約在虛構車站碰面，以及下一幕要找一本書；只說一次，記下最初回應。" },
        { heading: "穿插不同情節", body: "聊一段日常、一段意見不合的場景，觀察角色語氣是否突然改變或反覆重述設定。" },
        { heading: "不提示地回到約定", body: "看角色能否自然接續先前事件。測試時記下模型、方案、回合數與是否使用保存記憶。" },
      ],
    },
    comparison: {
      kicker: "05 / 五款服務",
      heading: "比較的是使用目的，不是人氣榜",
      description: "相似的 AI 角色聊天服務，在內容規則、角色探索、模型控制、媒體功能與資料處理上可能差很多。",
      columns: ["服務", "較適合的方向", "應先核對"],
      baseline: ["SpicyChat", "想調整模型與情節的虛構成人角色扮演", "各方案的上下文及記憶功能"],
      options: {
        "spicychat-vs-character-ai": ["Character.AI", "偏好平台管理的角色故事", "成人內容規則與目前的年齡政策"],
        "spicychat-vs-janitor-ai": ["Janitor AI", "想閱讀社群角色設定並自行探索", "真正的官方網域及當前模型選項"],
        "spicy-chat-ai-vs-crushon-ai": ["CrushOn AI", "從角色對話開始挑選", "免費模型與進階模型點數的差別"],
        "spicy-chat-ai-vs-polybuzz": ["PolyBuzz", "先瀏覽大量現成角色", "公開內容規則與私密資料處理"],
        "spicy-chat-ai-vs-girlfriendgpt": ["GirlfriendGPT", "偏重長期陪伴、語音與圖片", "共同營運關係及媒體使用成本"],
      },
    },
    privacy: {
      kicker: "06 / 長聊也要守住界線",
      heading: "角色的記憶不該變成你的個資庫",
      body: "親密的虛構情節不需要真實姓名、住址、工作地點或健康資訊。也要分清楚刪除對話、清除保存記憶、刪除帳號與取消訂閱是不同操作；若透過外部商店付費，退會不一定會自動停扣。",
      checks: [
        "只使用虛構成年人及虛構地點，不把真人肖像、個人檔案或私密對話放進角色卡。",
        "測試故事記憶時，用無害的設定，並核對保存記憶的編輯與刪除入口。",
        "下單前查看當前方案、續訂條件和可能另計的語音或圖片功能。",
        "SpicyChat 的現行規則不允許真人照片或可能被誤認為真人的寫實圖作為角色頭像。",
        "未成年人、非自願情節和可辨識真人的性化內容不在可接受範圍內。",
      ],
    },
    research: {
      kicker: "07 / 深入判斷",
      heading: "選 Spicy Chat AI 前，先問三個問題",
      description: "把搜尋到的功能名稱轉成自己的使用情境，才看得出哪些差異值得付費。",
      blocks: [
        { heading: "你想讀現成角色，還是寫自己的故事？", paragraphs: [
          "大量角色可縮短探索時間，卻不能保證每個角色都有清晰的性格與情節。比較兩個角色時，先讀開場：事件有沒有因果？角色有沒有想達成的事？同一段情節能否推進，而不是一直重複稱讚使用者？",
          "如果自己建立角色，先寫舞台、目標、不能做的事和說話方式，再試兩種不同的局面。用真實人物照片或過度私人的背景不會讓角色更立體，還可能觸及肖像與平台規則。",
        ] },
        { heading: "你需要較長上下文，還是可編輯的保存記憶？", paragraphs: [
          "上下文大致是模型這一回合可參照的材料；保存記憶則是另一層用來保留重點的功能。SpicyChat 官方列有免費方案與多個付費級距，Memory Manager、Semantic Memory 2.0 和上下文長度並非同一個升級。產品會變動，使用時仍須查看最新方案表。",
          "要公平測試，請固定人物與開場，只更動一項設定，記下第幾回合提過的虛構事實何時被正確引用。本站提供方法與來源，沒有宣稱自己完成所有模型的性能實驗。",
        ] },
        { heading: "你能接受哪些內容與資料規則？", paragraphs: [
          "成人角色扮演仍有明確限制。SpicyChat 對未成年、非自願活動、可辨識真人的性化描寫以及真人或近乎寫實的頭像都有規範。本站用來搭配文章的成人時尚照片，不等於可以上傳成產品角色頭像。",
          "另一個容易忽略的問題是資料生命週期：聊天紀錄與保存記憶怎麼刪、退會會影響哪些資料、透過應用商店訂閱要到哪裡取消。對手服務也應分開閱讀各自的條款，而不是把某一家公司的宣傳套用到所有平台。",
        ] },
      ],
    },
    blog: { kicker: "08 / VS 比較", heading: "用五種需求找到合適的對照", cta: "查看全部比較" },
    faq: {
      kicker: "09 / 常見疑問", heading: "關於 Spicy Chat AI 的實際問題",
      items: [
        { question: "Spicy Chat AI 應從哪項功能開始比較？", answer: "先選一段虛構成人故事，再分開確認角色設定、可用模型、上下文和保存記憶；不要只用角色數量或第一則回應判斷。" },
        { question: "SpicyChat 的成人角色聊天完全沒限制嗎？", answer: "不是。官方對未成年人、非自願情節、可辨識真人的性化內容等有禁止事項。使用前應查看當前內容規則。" },
        { question: "免費版和記憶功能是一回事嗎？", answer: "不是。免費方案、一般上下文、Memory Manager 與 Semantic Memory 2.0 在官方方案表中分列；可用模型和條件也可能改變。" },
        { question: "可以把自己的照片當角色頭像嗎？", answer: "依 SpicyChat 現行頭像規則，真人照片以及容易被誤認為真人的寫實圖片都不適合；請改用符合規範的虛構、非寫實創作。" },
        { question: "先看哪一篇替代方案比較？", answer: "想確認內容規則先看 Character.AI；重視角色探索看 PolyBuzz；想拆解免費模型與點數看 CrushOn AI；重視語音圖片則看 GirlfriendGPT。" },
      ],
    },
    final: { kicker: "開始長篇故事之前", heading: "先確認規則，再選擇工具", body: "帶著同一段虛構情節，比較模型、上下文、記憶和真正要付的費用；最後回到官方條款核對。", cta: "開啟 SpicyChat 官方網站" },
  },
  blog: {
    title: "Spicy Chat AI 比較文章",
    description: "閱讀 Spicy Chat AI 與 Character.AI、Janitor AI、CrushOn AI、PolyBuzz、GirlfriendGPT 的五篇繁體中文比較，從規則、記憶到花費逐項判斷。",
    intro: "這五篇不是同一張優缺點表的重寫：有的檢查成人內容規則，有的拆開外部模型與長篇設定，有的聚焦免費模型和點數，另有角色探索與語音圖片成本。文章引用產品自己的現行資料，沒有把未做的測試寫成實驗結果。",
    kicker: "五篇 VS 文章", listHeading: "依你在意的問題閱讀",
  },
  info: {
    about: {
      title: "關於 Spicy Chat AI", description: "認識 Spicy Chat AI 這個獨立編輯網站的研究範圍、與 SpicyChat 官方的關係，以及我們比較 AI 角色服務的方法。",
      kicker: "關於本站", intro: "本站寫給想比較成人虛構角色聊天服務、而不想只看宣傳語的讀者；我們不是 SpicyChat 官方網站。",
      sections: [
        { heading: "我們提供什麼", paragraphs: ["我們整理角色設定、模型、上下文、保存記憶、方案差異、安全規則，以及五款相關服務。網站是靜態出版物，不提供聊天、帳號、圖片上傳或付款功能。"] },
        { heading: "獨立性與連結", paragraphs: ["我們不自稱獲 SpicyChat 或比較對象授權、背書。導向官方服務的連結是方便讀者查閱原始資訊；離開本站後，適用該服務的條款與隱私政策。"] },
        { heading: "怎麼寫比較", paragraphs: ["五篇文章各回答不同的選擇問題。可核對的功能與規則會連向提供者資料；我們提出的試用方法是建議，不冒充已完成的性能測試。容易變動的價格和上限，請以當下方案頁與結帳畫面為準。"] },
      ],
    },
    contact: {
      title: "聯絡我們", description: "如需更正 Spicy Chat AI 的資料、回報來源或提出權利問題，請查看聯絡方式與避免傳送敏感資料的提醒。",
      kicker: "更正與權利事項", intro: "若文章有錯誤，請記下頁面網址、具體段落，以及能直接核對的原始來源。",
      sections: [
        { heading: "聯絡信箱的目前狀態", paragraphs: ["本站預留 support@spicychatai.fun 作為聯絡信箱，但目前尚未設定收信，寄送郵件可能無法送達。收信服務配置完成後會更新本頁；在此之前不會假裝已收到你的請求。"] },
        { heading: "請不要寄出私密內容", paragraphs: ["核對文章不需要密碼、一次性驗證碼、真實聊天紀錄、身分證件、住址或親密照片。涉及第三人的權利問題，請只提供必要資訊，不要擴散可辨識個資。"] },
      ],
    },
    "editorial-policy": {
      title: "編輯原則", description: "Spicy Chat AI 的繁體中文編輯原則：優先使用原始資料、區分事實與判斷，並說明成人內容安全界線及更正方式。",
      kicker: "我們如何把關", intro: "文章不是為了反覆塞入搜尋字詞，而是協助讀者判斷：哪項差異會影響自己的故事、隱私和支出。",
      sections: [
        { heading: "來源優先，避免假實測", paragraphs: ["方案、功能、禁止事項以提供者目前公開的文件為主要來源；廣告上的「無限制」不能直接寫成所有模型都無上限。若未親自完成跨平台性能測試，就只提供可重複的方法，不發明成績。"] },
        { heading: "比較要有不同問題", paragraphs: ["Character.AI 著重內容規範；Janitor AI 著重正確網域與當前設定；CrushOn AI 拆分免費模型及進階點數；PolyBuzz 檢查探索與公開範圍；GirlfriendGPT 說明共同營運顯示及媒體成本。這些差異比改寫同一篇制式文章更有用。"] },
        { heading: "成人虛構與真人權利", paragraphs: ["不協助未成年、非自願或可辨識真人的性化內容，也不鼓勵把他人肖像放進頭像。尤其 SpicyChat 現行規則禁止真人照片與近乎真人的寫實頭像；其他服務依各自政策核對。"] },
        { heading: "修正與更新", paragraphs: ["產品資訊改變時，優先修正具體頁面的錯誤與機器可讀的更新資訊。請提供問題段落和可核實來源；聯絡信箱尚未設定收信的限制已在聯絡頁揭露。"] },
      ],
    },
    privacy: {
      title: "隱私權說明", description: "自動 Google Analytics、Cookie、可識別機器人排除與瀏覽器隱私設定。",
      kicker: "隱私權", intro: "本站不是聊天產品：沒有角色對話、上傳、錄音、付款或訪客帳號資料庫。",
      sections: [{"heading":"頁面傳輸所需資訊","paragraphs":["網站託管及防護服務可能處理 IP 位址、瀏覽器資訊、請求網址、時間與安全訊號等一般連線紀錄。本站不接收 SpicyChat 的聊天內容、人物設定、保存記憶或登入憑證。"]},{"heading":"Google Analytics 自動流量分析","paragraphs":["一般瀏覽器開啟頁面時，Google Analytics 4 會自動開始統計頁面瀏覽、捲動、外部連結點擊、裝置資訊與流量來源。分析 Cookie 設定於 180 天後到期，使用時可能更新。Google 可能在境外處理資料。我們不啟用 Google signals、廣告個人化或廣告儲存。"]},{"heading":"Cookie、隱私與自動化流量","paragraphs":["GA4 會自動排除已知機器人；本站也會略過可識別爬蟲及明確標示自動化的瀏覽器，但無法保證辨識所有偽裝成人類的機器人。我們尊重 Global Privacy Control、Do Not Track 與 Google Analytics 瀏覽器停用設定。設定的頁面網址不含查詢參數與片段，來源網址只保留來源網域及協定。不傳送對話、提示詞、檔案或表單內容。清除 Cookie 不會刪除 Google 已處理的資料。"]},{"heading":"離開本站之後","paragraphs":["點選官方產品或比較服務的連結後，請閱讀對方的條款與隱私說明。註冊、對話、語音、圖片與付款會在對方服務進行；不要在任何服務輸入不必要的真實機密資訊。"]}],
    },
    terms: {
      title: "使用條款", description: "Spicy Chat AI 繁體中文使用條款：本站的資訊性質、成人虛構內容的責任界線、第三方產品變動與內容權利。",
      kicker: "使用條款", intro: "這是一個提供資料與比較的獨立網站，並不銷售或營運文中提到的聊天服務。",
      sections: [
        { heading: "資訊的性質", paragraphs: ["文章不是法律、醫療、財務、心理治療或關係諮商意見；也不保證任何第三方服務安全、合用或維持目前功能。做決定前，請直接核對提供者的最新說明。"] },
        { heading: "負責任的成人使用", paragraphs: ["不得藉本站內容從事騷擾、脅迫、冒用身分、未經同意的親密影像、違法性化內容或侵害他人肖像與權利。文章談及的成人情節只限虛構、具有同意的成年人。"] },
        { heading: "更新與著作內容", paragraphs: ["角色庫、模型、上下文、記憶、收費與規則都可能變動。未經許可，不得大量複製本站文字、比較架構、版面或視覺素材，亦不得冒稱為其他人的原創作品。"] },
      ],
    },
  },
};
