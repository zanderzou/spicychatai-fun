import type { ComparisonSlug, InfoPageKey, Locale } from "./locales";
import { zhHantEdition } from "./locale-zh-hant-pages";
import { esEdition } from "./locale-es-pages";
import { ptBrEdition } from "./locale-pt-br-pages";
import { ruEdition } from "./locale-ru-pages";
import { deEdition } from "./locale-de-pages";
import { frEdition } from "./locale-fr-pages";
import { arEdition } from "./locale-ar-pages";

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

// Drafts are published only after each complete 12-page locale passes its own gate.
export const localizedPages: Partial<Record<Locale, LocalizedEdition>> = {
  "zh-hant": zhHantEdition,
  es: esEdition,
  "pt-br": ptBrEdition,
  ru: ruEdition,
  de: deEdition,
  fr: frEdition,
  ar: arEdition,
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
  ko: {
    ui: {
      language: "언어", home: "홈", start: "시작하기", controls: "모델과 기억", compare: "비교", blog: "비교 글",
      about: "사이트 소개", contact: "연락처", editorial: "편집 원칙", privacy: "개인정보", terms: "이용 조건",
      official: "SpicyChat 공식 사이트", read: "비교 읽기", sources: "공식 자료", allArticles: "비교 글 모두 보기", more: "자세히 보기",
      independent: "SpicyChat 운영사와 무관한 독립 정보 사이트", adults: "성인을 위한 정보",
      analyticsSettings: "방문 분석 설정", analyticsTitle: "선택적 방문 분석",
      analyticsBody: "글을 개선하기 위해 Google Analytics를 사용해도 될까요? 광고 추적에는 사용하지 않습니다.",
      analyticsDecline: "허용하지 않음", analyticsAccept: "분석 허용", analyticsPrivacy: "개인정보 안내",
      analyticsStatusPrivacy: "브라우저의 개인정보 보호 신호를 존중하여 분석을 껐습니다.",
      analyticsStatusOn: "분석이 켜져 있습니다. ‘허용하지 않음’을 누르면 동의를 철회합니다.",
      analyticsStatusOff: "분석이 꺼져 있습니다. 이 선택은 이 사이트에만 적용됩니다.",
      skip: "본문으로 이동", navigation: "주요 탐색 메뉴", menu: "메뉴 열기", closeMenu: "메뉴 닫기",
    },
    home: {
      description: "Spicy Chat AI를 독립적으로 살펴봅니다. 성인 가상 캐릭터, 모델, 문맥과 기억, 현재 요금제, 이용 규칙과 다섯 대안의 차이를 설명합니다.",
      hero: {
        kicker: "독립적인 조사 · 성인 대상",
        tagline: "캐릭터 수보다 이야기를 움직이는 설정을 보세요.",
        body: "SpicyChat의 캐릭터 작성, 모델 선택, 페르소나, 문맥과 저장 기억을 분리해 이해하고, 목적이 다른 다섯 서비스와 비교할 수 있습니다.",
        primary: "시험 방법 보기", secondary: "비교 글 다섯 편",
      },
      intro: {
        kicker: "01 / 먼저 알아둘 점",
        heading: "Spicy Chat AI란?",
        lead: "SpicyChat은 가상의 캐릭터를 찾아 만들고 대화하는 역할극 서비스입니다. 이 독립 사이트 자체는 채팅이나 캐릭터 생성 기능을 제공하지 않습니다.",
        body: "긴 대화의 완성도는 프로필 사진만으로 정해지지 않습니다. 캐릭터 정의, 시작 장면, 선택 모델, 활성 문맥, 사용자 페르소나와 저장된 기억이 함께 작용합니다. 성인용이라는 홍보 문구를 아무 규칙도 없다는 뜻으로 받아들이지 말고, 현재 금지사항을 먼저 읽어야 합니다.",
      },
      journey: {
        kicker: "02 / 세 가지 시작점",
        heading: "찾고, 쓰고, 조정하기",
        description: "처음 몇 마디가 마음에 든다고 바로 결제하지 말고, 긴 이야기에 필요한 조절 범위를 작은 장면에서 시험하세요.",
        cards: [
          { label: "탐색", heading: "인사말까지 읽기", body: "인기 이미지보다 캐릭터의 목표, 장면, 첫 메시지, 공개 범위를 확인합니다." },
          { label: "작성", heading: "움직일 이유가 있는 인물", body: "형용사를 나열하는 대신 원하는 것, 피하는 것, 대화 습관을 짧게 씁니다. 실존 인물을 베끼지 않습니다." },
          { label: "설정", heading: "모델과 페르소나 구분", body: "사용자 역할과 모델·문맥을 동시에 바꾸지 않으면 어떤 요소가 답변을 바꿨는지 알기 쉽습니다." },
        ],
      },
      controls: {
        kicker: "03 / 대화의 다섯 요소",
        heading: "길고 일관된 이야기에 필요한 설정",
        description: "공식 설명은 최근 대화의 문맥, Memory Manager, Semantic Memory 2.0을 별개로 다룹니다. 현재 계정에 열려 있는 기능을 확인하세요.",
        cards: [
          { label: "캐릭터", heading: "정의와 첫 메시지", body: "짧고 분명한 동기와 시작 사건은 긴 성격 수식보다 시험하기 좋습니다." },
          { label: "모델", heading: "답변의 문체", body: "모델 접근은 요금제에 따라 다를 수 있습니다. 같은 장면으로 문체와 속도를 비교합니다." },
          { label: "문맥", heading: "지금 참고하는 대화", body: "스크롤할 수 있는 전체 기록과 다음 답변에 실제 사용되는 문맥은 다릅니다." },
          { label: "기억", heading: "별도로 저장한 사실", body: "Memory Manager와 Semantic Memory 2.0은 같은 혜택이 아닙니다. 삭제 뒤 저장 기억도 확인합니다." },
          { label: "요금제", heading: "필요한 기능의 단계", body: "고급 모델, 이미지, 음성, 생성 설정의 조건을 현재 공식 표에서 살펴봅니다." },
        ],
      },
      test: {
        kicker: "04 / 15분 비교 실험",
        heading: "아바타가 아니라 서사의 일관성을 보기",
        description: "서비스마다 같은 성인 가상 인물과 간단한 사건을 사용합니다. 이는 독자가 직접 할 수 있는 검증 절차이며, 이 사이트의 실측 결과가 아닙니다.",
        steps: [
          { heading: "가상 사실 두 가지 남기기", body: "장소와 다음 약속을 한 번만 말하고 처음 답변이 설정에 맞는지 살핍니다." },
          { heading: "주제를 바꾸어 이어가기", body: "열 차례 이상 다른 사건을 대화하며 반복과 말투 변화를 기록합니다." },
          { heading: "약속으로 돌아오기", body: "힌트를 다시 주지 않고 행동에 반영하는지 확인하고, 저장 기억은 따로 검사합니다." },
        ],
      },
      comparison: {
        kicker: "05 / 다섯 제품 비교",
        heading: "Spicy Chat AI와 무엇을 비교할까",
        description: "캐릭터 채팅이라는 공통점 아래에서도 표현 정책, 모델 접근, 탐색 방식, 미디어 비용과 운영 관계가 다릅니다. 각 글은 별도의 선택을 다룹니다.",
        columns: ["서비스", "잘 맞는 목적", "확인할 차이"],
        baseline: ["SpicyChat", "설정을 조절하는 성인 가상 역할극", "모델·문맥·기억의 요금제 차이"],
        options: {
          "spicychat-vs-character-ai": ["Character.AI", "관리된 캐릭터 이야기", "성인 표현 범위와 안전 정책"],
          "spicychat-vs-janitor-ai": ["Janitor AI", "커뮤니티 인물을 활용한 장편", "현재 모델과 연결 방식"],
          "spicy-chat-ai-vs-crushon-ai": ["CrushOn AI", "대화 중심 캐릭터 탐색", "무료 모델과 Pro 크레딧"],
          "spicy-chat-ai-vs-polybuzz": ["PolyBuzz", "큰 목록에서 새 인물 찾기", "공개 정책과 개인정보 처리"],
          "spicy-chat-ai-vs-girlfriendgpt": ["GirlfriendGPT", "음성·이미지를 더한 동반자 대화", "공통 운영사와 미디어 지출"],
        },
      },
      privacy: {
        kicker: "06 / 기억도 데이터입니다",
        heading: "대화를 지웠다고 저장 기억까지 지워진 것은 아닙니다",
        body: "친밀한 이야기는 현실의 비밀을 적기 쉬워집니다. 실제 주소나 건강·금전 정보를 넣지 말고, 채팅 기록, 저장 기억, 계정 삭제와 구독 취소를 따로 확인하세요. 공식 안내에 따르면 외부 결제 구독은 계정 삭제만으로 취소되지 않을 수 있습니다.",
        checks: [
          "가상의 이름과 장소를 사용하고 직장·주소·민감한 정보를 쓰지 않습니다.",
          "메시지를 수정하거나 지운 뒤 저장 기억이 어떻게 남는지 확인합니다.",
          "지금 이용 중인 요금제와 갱신 조건을 결제 화면에서 읽습니다.",
          "실존 인물 사진이나 실제 사람처럼 보이는 이미지를 캐릭터 아바타로 쓰지 않습니다.",
          "동의한 성인 가상 인물의 이야기만 다룹니다.",
        ],
      },
      research: {
        kicker: "07 / 선택 전 확인",
        heading: "Spicy Chat AI를 평가하는 세 가지 관점",
        description: "검색어에 기대기보다 만들고 싶은 장면과 실제로 필요한 기능을 먼저 정하세요.",
        blocks: [
          { heading: "인물의 수와 설정의 질", paragraphs: [
            "캐릭터가 많아도 모든 카드가 같은 깊이로 작성된 것은 아닙니다. 첫 메시지가 어떤 행동을 시작하는지, 인물의 욕구와 제약이 충돌 없이 이어지는지 읽어 보세요. 배경이 분명할수록 다음 장면을 평가할 기준도 분명해집니다.",
            "인기순 목록의 사진만 보지 말고 목표가 다른 두 인물을 짧게 시험해 보세요. 작성자의 설정과 모델의 답변을 나누어 살펴보기 위해서입니다. 실존 인물의 얼굴이나 사적 프로필은 필요하지 않습니다.",
          ] },
          { heading: "문맥과 저장 기억, 그리고 단계별 기능", paragraphs: [
            "문맥은 다음 답변에 사용할 수 있는 최근 대화의 범위이고, 저장 기억은 중요 정보를 별도로 남기는 기능입니다. SpicyChat의 현재 표에는 무료와 세 가지 유료 단계가 있으며 Memory Manager와 Semantic Memory 2.0의 이용 단계가 다릅니다. 수치와 가격은 바뀔 수 있으므로 공식 표를 우선하세요.",
            "공정한 비교를 위해 같은 인물과 사건을 유지한 채 모델만 바꾸고, 다음에 문맥 설정만 바꿉니다. ‘잘 기억한다’라는 느낌 대신 언제 알려 준 사실을 몇 차례 뒤에 정확히 활용했는지 적으세요. 이 사이트는 모든 모델을 직접 측정했다고 주장하지 않습니다.",
          ] },
          { heading: "규칙과 개인정보를 나중으로 미루지 않기", paragraphs: [
            "성인용이라는 표현에도 미성년자, 비동의, 실존 인물의 성적 묘사, 개인 정보 등에 관한 금지가 있습니다. 현재 아바타 규칙은 실제 인물 사진뿐 아니라 실사처럼 보이는 생성 이미지도 제한합니다. 이 편집 사이트의 모델 사진을 캐릭터 아바타로 재사용해서는 안 됩니다.",
            "대화가 친밀해질수록 현실과 가상의 경계를 유지해야 합니다. 등록 전 기록과 기억 삭제, 외부에서 구매한 구독의 취소, 데이터 처리 조건을 읽으세요. 다른 제품과 비교할 때도 각 회사의 규칙과 개인정보처리방침을 따로 확인합니다.",
          ] },
        ],
      },
      blog: { kicker: "08 / 비교 글", heading: "다섯 가지 다른 선택을 위한 비교", cta: "비교 글 모두 보기" },
      faq: {
        kicker: "09 / 자주 묻는 질문",
        heading: "Spicy Chat AI에 관한 질문",
        items: [
          { question: "Spicy Chat AI는 무엇인가요?", answer: "SpicyChat을 찾을 때 쓰는 검색어입니다. 공식 서비스에서는 가상 캐릭터를 찾아 만들고 대화할 수 있습니다. 이 사이트는 독립적인 설명을 제공할 뿐 채팅을 운영하지 않습니다." },
          { question: "SpicyChat은 아무 제한이 없나요?", answer: "그렇지 않습니다. 성인용 홍보와 별도로 금지 콘텐츠, 모델 접근, 문맥과 기억의 요금제 차이가 있습니다. 현재 공식 안내를 직접 확인하세요." },
          { question: "무료로 저장 기억을 쓸 수 있나요?", answer: "현재 공식 표는 무료 단계, Memory Manager가 포함된 단계, Semantic Memory 2.0이 포함된 상위 단계를 구분합니다. 최신 조건은 실제 이용 화면에서 확인하세요." },
          { question: "내 사진을 캐릭터 아바타로 올려도 되나요?", answer: "SpicyChat의 현행 정책은 실존 인물 사진과 실제 사람처럼 보일 수 있는 사실적인 이미지를 허용하지 않습니다. 완전히 가상인 비실사 그림을 쓰고 공식 규칙을 읽으세요." },
          { question: "어떤 대안을 먼저 비교해야 하나요?", answer: "관리된 이야기에는 Character.AI, 많은 캐릭터 탐색에는 PolyBuzz, 고급 모델 크레딧에는 CrushOn AI, 음성·이미지 중심에는 GirlfriendGPT가 각각 다른 출발점입니다." },
        ],
      },
      final: { kicker: "긴 대화 전에 확인", heading: "이야기에 맞는 설정과 경계를 선택하세요", body: "같은 가상 장면을 짧게 시험하고 기억, 현재 요금제와 안전 규칙을 살핀 뒤 긴 이야기를 시작하세요.", cta: "공식 SpicyChat 열기" },
    },
    blog: {
      title: "Spicy Chat AI 비교 글",
      description: "Spicy Chat AI와 Character.AI, Janitor AI, CrushOn AI, PolyBuzz, GirlfriendGPT를 다섯 가지 목적에 맞춰 공식 자료로 비교합니다.",
      intro: "다섯 글은 같은 결론의 이름만 바꾼 복사본이 아닙니다. 표현 정책, 설정 부담, 무료 모델과 크레딧, 캐릭터 탐색, 음성·이미지라는 서로 다른 결정을 다룹니다. 확인하지 않은 성능 시험을 실제 측정값처럼 제시하지 않습니다.",
      kicker: "비교 글", listHeading: "목적에 따라 고르는 다섯 비교",
    },
    info: {
      about: {
        title: "Spicy Chat AI 소개", description: "Spicy Chat AI의 독립적인 편집 목적, 공식 서비스와의 관계 및 비교 방법을 설명합니다.", kicker: "이 사이트에 대해",
        intro: "이 사이트는 성인이 AI 캐릭터 서비스를 선택하기 전에 기능, 규칙, 비용과 개인정보를 확인하도록 돕는 정적 출판물입니다. SpicyChat의 공식 제품이 아닙니다.",
        sections: [
          { heading: "다루는 주제", paragraphs: ["캐릭터 카드, 모델, 문맥, 페르소나, 저장 기억, 현재 요금제, 안전 규칙과 다섯 대안을 다룹니다. 채팅, 이미지 생성, 로그인, 결제는 제공하지 않습니다."] },
          { heading: "독립성", paragraphs: ["SpicyChat 또는 비교 대상 업체의 공식 인증이나 추천을 받았다고 주장하지 않습니다. 공식 사이트 링크는 외부 제공사로 이동합니다. 모델, 제한, 가격은 구매 전에 해당 제공사의 현재 화면에서 확인해야 합니다."] },
          { heading: "편집 방법", paragraphs: ["각 비교 글은 다른 선택 문제를 다루며 문서에 적힌 제품 사실과 편집상 판단을 구별합니다. 하지 않은 실기 시험을 한 것처럼 쓰지 않고 변하기 쉬운 가격을 고정된 사실로 제시하지 않습니다."] },
        ],
      },
      contact: {
        title: "문의", description: "Spicy Chat AI의 사실 정정, 출처 및 권리 문제에 관한 연락 방법과 보내지 말아야 할 민감 정보를 안내합니다.", kicker: "정정과 권리 문의",
        intro: "오류나 권리 침해 우려가 있다면 해당 페이지 URL, 문제가 된 문장 또는 이미지, 확인 가능한 1차 자료를 알려 주세요.",
        sections: [
          { heading: "연락 주소", paragraphs: ["주소는 support@spicychatai.fun입니다. 다만 현재 이 도메인의 메일 수신 기능이 설정되지 않았습니다. 활성화 전에는 보낸 메일이 도착하지 않을 수 있으며, 상태가 바뀌면 이 페이지를 갱신합니다."] },
          { heading: "민감한 자료는 보내지 마세요", paragraphs: ["비밀번호, 인증 코드, 사적인 역할극 대화, 저장 기억, 주소, 신분증, 음성, 친밀한 이미지는 정정에 필요하지 않습니다. 실존 인물의 개인정보를 최소한으로 다루고 제3자의 권리를 존중해 주세요."] },
        ],
      },
      "editorial-policy": {
        title: "편집 원칙", description: "Spicy Chat AI가 출처, 독립적인 비교, 안전 경계와 정정에 적용하는 기준입니다.", kicker: "발행 기준",
        intro: "검색어를 반복하기보다 실제 독자가 고민하는 선택에 답합니다. 다섯 비교 글은 각자 다른 판단 기준을 가집니다.",
        sections: [
          { heading: "사실과 판단을 분리", paragraphs: ["기능, 요금제 포함 범위와 금지 규칙은 가능한 한 제공사의 현재 공식 자료에 연결합니다. 광고 문구를 실측 결과로 바꾸거나 공개되지 않은 모델 성능, 고정 가격, 저장 기간을 만들어 내지 않습니다."] },
          { heading: "성인 가상 이야기와 권리", paragraphs: ["미성년자, 비동의, 실존 인물의 성적 묘사와 무단 초상 사용을 권하지 않습니다. SpicyChat의 현행 아바타 정책은 실제 사람처럼 보이는 이미지에도 제한을 둡니다. 다른 제품의 규칙은 별도로 확인합니다."] },
          { heading: "정정", paragraphs: ["근거가 바뀌면 해당 글과 기계가 읽는 수정 날짜를 갱신합니다. 정정 요청에는 URL, 문제가 된 문장, 직접 확인할 수 있는 자료가 필요합니다. 이메일 수신이 아직 설정되지 않았다는 점은 연락처에 밝힙니다."] },
        ],
      },
      privacy: {
        title: "개인정보 안내", description: "Spicy Chat AI 정적 사이트의 방문 정보, 선택적 분석 동의, 외부 링크와 데이터 처리 방식을 설명합니다.", kicker: "개인정보",
        intro: "이 사이트는 정적 출판물입니다. 계정, 역할극 채팅, 이미지 업로드, 음성 녹음, 결제 또는 방문자 프로필 데이터베이스가 없습니다.",
        sections: [
          { heading: "사이트 제공에 필요한 요청 정보", paragraphs: ["호스팅 및 보안 제공사는 사이트 전달과 보호를 위해 IP 주소, 브라우저 종류, URL, 접속 시각과 보안 신호 같은 일반적인 요청 정보를 처리할 수 있습니다. 이 사이트는 SpicyChat 메시지, 페르소나, 저장 기억이나 로그인 정보를 받지 않습니다."] },
          { heading: "선택적 Google Analytics", paragraphs: ["명시적으로 허용한 뒤에만 Google Analytics 4를 불러와 페이지 방문, 스크롤, 외부 링크 클릭, 기기와 유입 경로 등을 측정합니다. Google signals나 광고 맞춤 설정은 켜지 않습니다. Google에 보내는 페이지 URL에서 검색 매개변수와 해시 부분을 제외하며, 데이터가 거주 국가 밖에서 처리될 수 있습니다."] },
          { heading: "동의, 거부, 철회", paragraphs: ["허용 전에는 분석 스크립트를 로드하지 않습니다. 하단의 ‘방문 분석 설정’에서 거부하거나 동의를 철회할 수 있습니다. 선택은 이 사이트의 로컬 저장소에 최대 180일 남고, 철회하면 이 사이트에서 접근 가능한 분석 쿠키를 지웁니다. Global Privacy Control과 Do Not Track 신호를 존중합니다. 쿠키 삭제가 이미 Google에서 처리한 과거 데이터를 즉시 지운다는 뜻은 아닙니다."] },
          { heading: "다른 사이트로 이동할 때", paragraphs: ["공식 제품이나 비교 대상 링크를 열면 해당 제공사의 약관과 개인정보처리방침이 적용됩니다. 가입, 채팅, 미디어 생성, 음성 및 결제 전에 각 회사의 조건을 읽고 실생활의 민감 정보를 입력하지 마세요."] },
        ],
      },
      terms: {
        title: "이용 조건", description: "독립적인 Spicy Chat AI 출판물의 정보 범위, 책임 있는 성인 이용, 제품 변경과 저작물 이용 조건을 안내합니다.", kicker: "이용 조건",
        intro: "이 사이트는 조사와 비교를 돕는 출판물이지 외부 채팅 제품 자체가 아닙니다.",
        sections: [
          { heading: "정보의 한계", paragraphs: ["글은 법률, 의료, 금융, 심리치료 또는 관계 문제에 관한 전문 조언이 아닙니다. 제3자 제품의 안전성이나 적합성을 보증하지 않으며 중요한 결정 전에 제공사의 현행 조건을 확인해야 합니다."] },
          { heading: "책임 있는 사용", paragraphs: ["괴롭힘, 강요, 사칭, 동의 없는 친밀 이미지, 불법 성적 콘텐츠 또는 다른 사람의 초상·권리 침해를 돕는 데 이 사이트를 사용하지 마세요. 성인 주제는 동의하는 가상의 성인 인물을 전제로 다룹니다."] },
          { heading: "변경과 창작물", paragraphs: ["캐릭터, 모델, 문맥, 기억 도구, 요금과 정책은 바뀔 수 있습니다. 이 사이트의 글, 비교 방식, 레이아웃과 시각 자료를 허락 없이 대량 복제하거나 타인의 작품으로 표시해서는 안 됩니다."] },
        ],
      },
    },
  },
};
