import type { ComparisonSlug, InfoPageKey, Locale } from "./locales";

export interface LocalizedInfoPage {
  title: string;
  description: string;
  kicker: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export interface LocalizedEdition {
  ui: {
    language: string; home: string; start: string; controls: string; compare: string; blog: string;
    about: string; contact: string; editorial: string; privacy: string; terms: string;
    official: string; read: string; sources: string; allArticles: string; more: string;
    independent: string; adults: string; analyticsSettings: string; analyticsTitle: string;
    analyticsBody: string; analyticsDecline: string; analyticsAccept: string;
    analyticsPrivacy: string; analyticsStatusPrivacy: string; analyticsStatusOn: string;
    analyticsStatusOff: string; skip: string; navigation: string; menu: string; closeMenu: string;
  };
  home: {
    description: string;
    hero: { kicker: string; tagline: string; body: string; primary: string; secondary: string };
    intro: { kicker: string; heading: string; lead: string; body: string };
    journey: { kicker: string; heading: string; description: string; cards: { label: string; heading: string; body: string }[] };
    controls: { kicker: string; heading: string; description: string; cards: { label: string; heading: string; body: string }[] };
    test: { kicker: string; heading: string; description: string; steps: { heading: string; body: string }[] };
    comparison: { kicker: string; heading: string; description: string; columns: [string, string, string]; baseline: [string, string, string]; options: Record<ComparisonSlug, [string, string, string]> };
    privacy: { kicker: string; heading: string; body: string; checks: string[] };
    research: { kicker: string; heading: string; description: string; blocks: { heading: string; paragraphs: string[] }[] };
    blog: { kicker: string; heading: string; cta: string };
    faq: { kicker: string; heading: string; items: { question: string; answer: string }[] };
    final: { kicker: string; heading: string; body: string; cta: string };
  };
  blog: { title: string; description: string; intro: string; kicker: string; listHeading: string };
  info: Record<InfoPageKey, LocalizedInfoPage>;
}

// Draft only. No locale route is published until every language and page passes QA.
export const localizedPages: Partial<Record<Locale, LocalizedEdition>> = {
  ja: {
    ui: {
      language: "言語", home: "ホーム", start: "始め方", controls: "モデルと記憶", compare: "比較", blog: "比較記事",
      about: "このサイトについて", contact: "連絡先", editorial: "編集方針", privacy: "プライバシー", terms: "利用条件",
      official: "SpicyChat 公式サイト", read: "比較を読む", sources: "一次資料", allArticles: "比較記事一覧", more: "詳しく見る",
      independent: "SpicyChat の運営元とは関係のない独立した情報サイト", adults: "成人向けの情報",
      analyticsSettings: "アクセス解析の設定", analyticsTitle: "任意のアクセス解析",
      analyticsBody: "記事の改善に Google Analytics を利用してもよいですか。広告追跡には使いません。",
      analyticsDecline: "許可しない", analyticsAccept: "解析を許可", analyticsPrivacy: "プライバシーの詳細",
      analyticsStatusPrivacy: "ブラウザーのプライバシー設定を尊重し、解析を停止しています。",
      analyticsStatusOn: "解析は有効です。「許可しない」で同意を撤回できます。",
      analyticsStatusOff: "解析は無効です。この選択は当サイトにのみ適用されます。",
      skip: "本文へ移動", navigation: "メインナビゲーション", menu: "メニューを開く", closeMenu: "メニューを閉じる",
    },
    home: {
      description: "Spicy Chat AI を独立した立場で解説。成人向けの架空キャラクター、モデル、文脈と記憶、現行プラン、安全規則、五つの代替サービスを比較します。",
      hero: {
        kicker: "独立した調査 · 成人向け",
        tagline: "登場人物の数だけでなく、物語を動かす仕組みを見る。",
        body: "SpicyChat のキャラクター作成、モデル選択、ペルソナ、文脈、記憶と現行ルールを整理。五つの比較記事で、自分に合う会話の形を探せます。",
        primary: "比較方法を見る", secondary: "五つの比較記事",
      },
      intro: {
        kicker: "01 / まず押さえること",
        heading: "Spicy Chat AI とは",
        lead: "SpicyChat は、架空のキャラクターを探したり作ったりして会話するロールプレイ型のサービスです。このサイト自体にはチャット機能はありません。",
        body: "物語の質を決めるのは絵柄だけではなく、キャラクターの定義、冒頭の場面、選択モデル、利用できる文脈、ペルソナ、保存された記憶です。公式の成人向け宣伝を「規則が一切ない」という意味に読み替えず、利用前に現行の禁止事項を確認します。",
      },
      journey: {
        kicker: "02 / 三つの入口",
        heading: "見つける、作る、設定する",
        description: "最初の印象で課金せず、短い場面を使って自分に必要な操作を確かめます。",
        cards: [
          { label: "発見", heading: "冒頭文まで読む", body: "人気の画像より、キャラクターの目的、場面、最初の一言と公開設定を確認します。" },
          { label: "作成", heading: "矛盾の少ない人物像", body: "性格を形容詞だけで並べず、望み、苦手なこと、会話の癖を短く書きます。実在人物をモデルにしません。" },
          { label: "調整", heading: "モデルとペルソナを分ける", body: "話し手としての自分、モデル、文脈の設定を一度に全部変えず、何が結果に効いたかを確かめます。" },
        ],
      },
      controls: {
        kicker: "03 / 会話を形づくる要素",
        heading: "物語に影響する五つの操作",
        description: "公式資料は文脈、Memory Manager、Semantic Memory 2.0 を別の仕組みとして示しています。料金表と現在の画面を合わせて読みます。",
        cards: [
          { label: "キャラクター", heading: "設定と冒頭", body: "短く具体的な動機と場面は、長い形容詞の羅列より検証しやすい出発点です。" },
          { label: "モデル", heading: "返答の書き方", body: "使えるモデルはプランで異なり得ます。同じ設定のまま文章、進行、速度を比べます。" },
          { label: "文脈", heading: "直近の会話", body: "画面に残る全履歴と、次の返答に使われる文脈は同一ではありません。" },
          { label: "記憶", heading: "保存された事実", body: "Memory Manager と Semantic Memory 2.0 は別の特典です。編集・削除後も保存記憶を確認します。" },
          { label: "プラン", heading: "機能と支出", body: "上位モデル、画像、音声、生成設定の利用条件を現在の公式表で確かめます。" },
        ],
      },
      test: {
        kicker: "04 / 15分の試し方",
        heading: "アバターより物語の一貫性を測る",
        description: "違うサービスに同じ成人の架空設定を与え、場面を変えた後に無害な約束を覚えているかを調べます。これは読者向けの方法で、当サイトによる実測結果ではありません。",
        steps: [
          { heading: "二つの架空の事実を置く", body: "場所と次の予定を一度だけ伝え、最初の返答が設定に沿うかを見ます。" },
          { heading: "話題を変えて続ける", body: "十数ターンの間に別の出来事を挟み、繰り返しや口調の変化を記録します。" },
          { heading: "約束へ戻る", body: "ヒントを与えずに行動で示せるかを見て、必要なら保存記憶も別に調べます。" },
        ],
      },
      comparison: {
        kicker: "05 / 五製品との比較",
        heading: "Spicy Chat AI を何と比べるか",
        description: "同じキャラクター会話でも、表現ルール、発見の仕方、上位モデル、音声・画像と運営元は異なります。短い勝敗表ではなく、目的ごとの記事を用意しました。",
        columns: ["サービス", "向いている目的", "確認したい違い"],
        baseline: ["SpicyChat", "設定を調整する成人の架空ロールプレイ", "モデル、文脈、記憶のプラン差"],
        options: {
          "spicychat-vs-character-ai": ["Character.AI", "管理されたキャラクター物語", "成人向け表現と安全ルール"],
          "spicychat-vs-janitor-ai": ["Janitor AI", "コミュニティ作品を使う長編", "今利用できるモデルと接続方法"],
          "spicy-chat-ai-vs-crushon-ai": ["CrushOn AI", "会話中心のキャラクター探し", "無料モデルと上位モデルのクレジット"],
          "spicy-chat-ai-vs-polybuzz": ["PolyBuzz", "多数のキャラクターから発見", "公開ルールと個人データの扱い"],
          "spicy-chat-ai-vs-girlfriendgpt": ["GirlfriendGPT", "音声・画像を交えたコンパニオン", "共通の運営表示とメディア費用"],
        },
      },
      privacy: {
        kicker: "06 / 記憶もデータ",
        heading: "会話の削除と保存記憶を分けて考える",
        body: "長編の物語は私的な情報を書き込みやすくなります。実生活の秘密は入力せず、履歴、Memory Manager、退会とサブスクリプションの管理を別々に確かめてください。公式資料では、外部経由の契約は退会だけで自動解約されない場合があります。",
        checks: [
          "架空の名前と設定を使い、実生活の住所・勤務先・医療情報を書かない。",
          "保存された記憶が編集・削除後にどう扱われるか確認する。",
          "利用しているプランと更新条件を購入画面で確かめる。",
          "実在人物や実写に見える画像をキャラクターのアバターに使わない。",
          "成人の架空人物による同意のある場面だけを扱う。",
        ],
      },
      research: {
        kicker: "07 / 選ぶ前に読む",
        heading: "Spicy Chat AI を見極める三つの視点",
        description: "検索語よりも、自分が何を作りたいのかを明確にしてから現行の公式資料を読みます。",
        blocks: [
          { heading: "キャラクターの数と質を分ける", paragraphs: [
            "カタログが大きくても、すべての人物が同じ深さで書かれているわけではありません。冒頭文に行動のきっかけがあるか、人物の望みと制約が一致しているかを見ます。架空の舞台が明確なら、モデルが次に何を進めるべきか判断しやすくなります。",
            "人気順だけで選ばず、目的の違う二つのキャラクターを短く試してみてください。会話の質を作者の設定とサービス側のモデルに分けて考えるためです。実在人物の顔写真や私的なプロフィールを持ち込む必要はありません。",
          ] },
          { heading: "文脈、記憶、プランを混ぜない", paragraphs: [
            "文脈は次の返答で参照できる内容の範囲で、保存記憶は重要な事実を別に保持する仕組みです。SpicyChat の現行表には無料枠と三つの有料枠があり、Memory Manager と Semantic Memory 2.0 の対象は異なります。数字や料金は更新され得るので、記事の一節より現在の表を優先します。",
            "公平に比べるなら、同じ場面のままモデルだけ、次に文脈設定だけを変えます。曖昧な『よく覚えている』ではなく、いつ示した架空の事実を、何ターン後に正しく使えたか記録します。当サイトは全モデルを実測したとは主張しません。",
          ] },
          { heading: "プライバシーと規則を最後にしない", paragraphs: [
            "『成人向け』でも未成年、不同意、実在人物の性的描写、個人情報などに関する禁止事項があります。さらにアバターには、実在人物の写真や実写に見える生成画像を許可しない現行規則があります。編集用に撮ったファッション写真をアバターへ流用しないでください。",
            "親密な会話ほど、架空の設定と実生活を区別することが大切です。登録前に履歴と保存記憶の削除、外部購入の解約、データ処理に関する現行資料を読みます。他社との比較も、それぞれの規則とプライバシーポリシーを別々に確認して行います。",
          ] },
        ],
      },
      blog: { kicker: "08 / 比較記事", heading: "五つの目的に合わせて比較する", cta: "比較記事一覧" },
      faq: {
        kicker: "09 / よくある質問",
        heading: "Spicy Chat AI の疑問",
        items: [
          { question: "Spicy Chat AI とは何ですか。", answer: "SpicyChat を調べる際に使われる検索語です。公式サービスでは架空キャラクターを探し、作成して会話できます。当サイトは独立した解説サイトで、チャットは提供しません。" },
          { question: "SpicyChat は本当に無制限ですか。", answer: "成人向けの宣伝表現があっても、禁止事項、モデルや文脈のプラン差はあります。現行の公式ルールと料金表を別々に読んでください。" },
          { question: "無料枠で記憶機能を使えますか。", answer: "現行の公式プラン表では、無料枠、Memory Manager 対象の有料枠、Semantic Memory 2.0 対象の上位枠が分かれています。利用画面で最新条件を確認してください。" },
          { question: "自分の写真をアバターにできますか。", answer: "SpicyChat の現行規則は実在人物の写真や、実写と見分けにくい画像をアバターとして認めません。完全に架空で非写実的な絵を使い、公式方針を確認してください。" },
          { question: "どの代替サービスを先に比べますか。", answer: "管理された物語なら Character.AI、カタログから探すなら PolyBuzz、上位モデルのクレジットを比較するなら CrushOn AI、音声や画像を重視するなら GirlfriendGPT が異なる出発点です。" },
        ],
      },
      final: { kicker: "始める前に条件を確かめる", heading: "物語に合う設定とルールを選ぶ", body: "同じ架空の場面で短く試し、記憶、現行プラン、安全規則を確認してから長い会話を始めましょう。", cta: "公式 SpicyChat を開く" },
    },
    blog: {
      title: "Spicy Chat AI の比較記事",
      description: "Spicy Chat AI と Character.AI、Janitor AI、CrushOn AI、PolyBuzz、GirlfriendGPT を五つの目的別に比較。現行の一次資料と判断方法を示します。",
      intro: "五つの比較は同じ結論の言い換えではありません。表現ルール、設定の手間、無料モデルとクレジット、発見のしやすさ、音声・画像という別々の選択を扱います。各記事は公式資料を参照し、未実施の性能試験を実測値として示しません。",
      kicker: "比較記事", listHeading: "目的から読む五つの VS",
    },
    info: {
      about: {
        title: "Spicy Chat AI について", description: "Spicy Chat AI は SpicyChat を扱う独立した情報サイトです。編集目的、運営元との関係、比較の方法を説明します。", kicker: "このサイトについて",
        intro: "このサイトは成人向けキャラクター会話を選ぶ前に、機能、ルール、費用、プライバシーを落ち着いて調べるための出版物です。SpicyChat の公式サービスではありません。",
        sections: [
          { heading: "扱う範囲", paragraphs: ["キャラクターの設定、モデル、文脈、ペルソナ、保存記憶、安全規則、現行プランと五つの代替サービスを扱います。チャット、画像生成、アカウント作成、支払いは提供しません。"] },
          { heading: "独立性", paragraphs: ["SpicyChat または比較先の運営会社から公認・推奨されているとは主張しません。公式サイトへのリンクは提供元へ移動する外部リンクです。購入や登録の前に、提供元が示す現在の条件を直接確認してください。"] },
          { heading: "比較の方法", paragraphs: ["各記事は異なる選択に焦点を当て、一次資料に記された機能と当サイトの編集上の判断を区別します。記述していない実機テストを行ったようには書かず、変わりやすい料金や上限を固定した事実として扱いません。"] },
        ],
      },
      contact: {
        title: "お問い合わせ", description: "Spicy Chat AI の事実確認、出典、権利に関する連絡方法と、送らないでほしい機密情報について。", kicker: "訂正と権利のご連絡",
        intro: "誤りや権利上の懸念があれば、対象ページの URL、問題の箇所、確認できる一次資料を示してください。",
        sections: [
          { heading: "連絡先", paragraphs: ["連絡先は support@spicychatai.fun です。ただし現在、このドメインのメール受信は設定されていません。設定が完了するまで送信しても届かない可能性があります。受信可能になった際はこのページを更新します。"] },
          { heading: "機密情報を送らないでください", paragraphs: ["パスワード、認証コード、私的な会話、保存記憶、住所、身分証、音声、親密な画像は訂正の判断に必要ありません。実在人物に関する情報は最小限にし、第三者の権利を尊重してください。"] },
        ],
      },
      "editorial-policy": {
        title: "編集方針", description: "Spicy Chat AI が一次資料、比較の独自性、安全境界、訂正に適用する編集方針です。", kicker: "公開の基準",
        intro: "検索語の反復より、読者が実際に迷う選択に答えることを優先します。五つの比較記事はそれぞれ異なる判断軸を持ちます。",
        sections: [
          { heading: "事実と判断を区別", paragraphs: ["機能、対象プラン、禁止事項は可能な限り提供元の現行文書に結び付けます。宣伝の文言を実測結果へ変換せず、非公開のモデル性能、固定価格、未知の保存期間を推測しません。"] },
          { heading: "成人の架空作品と権利", paragraphs: ["未成年、不同意、実在人物の性的描写や肖像の無断利用を促しません。SpicyChat の現行アバター規則は実在人物や実写に見える画像にも制限を設けています。比較先の規則は各社別に確認します。"] },
          { heading: "訂正", paragraphs: ["資料が変わった場合は該当箇所と機械可読の更新日を修正します。訂正依頼には URL、問題の文、直接確認できる資料を添えてください。メール受信が未設定である点は連絡先ページに明示しています。"] },
        ],
      },
      privacy: {
        title: "プライバシー", description: "Spicy Chat AI の静的サイト、アクセス解析の同意、外部リンクとデータの取扱いを説明します。", kicker: "プライバシー",
        intro: "当サイトは静的な出版物です。会話、アカウント、画像アップロード、音声録音、決済、訪問者プロフィールのデータベースはありません。",
        sections: [
          { heading: "配信に必要な情報", paragraphs: ["ホスティングとセキュリティの提供元は、ページを配信・保護するため、IP アドレス、ブラウザー情報、URL、時刻、セキュリティ信号などの通常のリクエスト情報を処理する場合があります。当サイトは SpicyChat の会話、ペルソナ、保存記憶、認証情報を受け取りません。"] },
          { heading: "任意の Google Analytics", paragraphs: ["明示的に許可した場合だけ Google Analytics 4 を読み込み、閲覧ページ、スクロール、外部リンクのクリック、端末・参照元などを測定します。広告用の Google signals と広告パーソナライズは有効にしません。送信するページ URL からクエリ文字列とフラグメントを除きます。Google が国外で処理する可能性もあります。"] },
          { heading: "同意と撤回", paragraphs: ["許可するまでは解析スクリプトを読み込みません。画面下部の「アクセス解析の設定」から拒否・撤回できます。選択はこのサイトのローカルストレージに最大180日保存され、アクセス可能な解析 Cookie は撤回時に削除します。ブラウザーの Global Privacy Control と Do Not Track を尊重します。ただし Cookie を消しても、Google が過去に処理したデータが直ちに削除されるわけではありません。"] },
          { heading: "外部サイト", paragraphs: ["公式製品や比較先へのリンクを開いた後は、その提供元の規約とプライバシー方針が適用されます。登録、会話、画像生成、音声、支払いの前に各社の説明を読み、実生活の機密情報を入力しないでください。"] },
        ],
      },
      terms: {
        title: "利用条件", description: "独立した Spicy Chat AI 出版物の利用範囲、責任ある成人利用、製品情報の変更と著作物の扱いを示します。", kicker: "利用条件",
        intro: "このサイトは調査と比較を助ける出版物であり、第三者のチャットサービスそのものではありません。",
        sections: [
          { heading: "情報の位置づけ", paragraphs: ["記事は法務、医療、金融、心理療法、関係性についての専門助言ではありません。紹介する製品の安全性や適合性を保証せず、選択の前に公式の現行条件を確かめる必要があります。"] },
          { heading: "責任ある利用", paragraphs: ["嫌がらせ、強制、なりすまし、同意のない親密画像、違法な性的内容、他人の肖像・権利の侵害を助ける目的でこのサイトを利用しないでください。成人向けの話題は、同意のある架空の成人を前提に扱います。"] },
          { heading: "変更と著作物", paragraphs: ["キャラクター、モデル、文脈、記憶機能、料金、ルールは予告なく変わることがあります。当サイトの文章、比較枠組み、レイアウト、視覚素材を許可なく大量複製したり、他者の作品として表示したりしないでください。"] },
        ],
      },
    },
  },
};
