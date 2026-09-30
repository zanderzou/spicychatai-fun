import type { ComparisonSlug, Locale } from "./locales";

export interface LocalizedArticle {
  title: string;
  description: string;
  intro: string;
  dimensions: [string, string, string][];
  sections: [string, string][];
  verdict: string;
}

export const comparisonSources: Record<ComparisonSlug, { name: string; url: string }[]> = {
  "spicychat-vs-character-ai": [
    { name: "SpicyChat: plans and features", url: "https://support.spicychat.ai/support/solutions/articles/153000260533-plans-and-what-s-included" },
    { name: "SpicyChat: content guidelines", url: "https://support.spicychat.ai/support/solutions/articles/153000260680-what-isn-t-allowed-the-short-version" },
    { name: "Character.AI: Safety Center", url: "https://support.character.ai/hc/en-us/articles/21704914723995-Safety-Center" },
    { name: "Character.AI: NSFW policy", url: "https://support.character.ai/hc/en-us/articles/15063955587611-What-about-NSFW" },
    { name: "Character.AI: changes for teens", url: "https://support.character.ai/hc/en-us/articles/42645561782555-Important-Changes-for-Teens-on-Character-ai/" },
  ],
  "spicychat-vs-janitor-ai": [
    { name: "SpicyChat: plans and features", url: "https://support.spicychat.ai/support/solutions/articles/153000260533-plans-and-what-s-included" },
    { name: "SpicyChat: character rules", url: "https://support.spicychat.ai/support/solutions/articles/153000260680-what-isn-t-allowed-the-short-version" },
    { name: "Janitor AI: official product", url: "https://janitorai.com/" },
  ],
  "spicy-chat-ai-vs-crushon-ai": [
    { name: "SpicyChat: plans and features", url: "https://support.spicychat.ai/support/solutions/articles/153000260533-plans-and-what-s-included" },
    { name: "CrushOn.AI: message, model, context and memory limits", url: "https://chat.crushon.ai/blog/ai-character-chat-unlimited-messages-limits" },
    { name: "CrushOn.AI: official product", url: "https://chat.crushon.ai/" },
  ],
  "spicy-chat-ai-vs-polybuzz": [
    { name: "SpicyChat: plans and features", url: "https://support.spicychat.ai/support/solutions/articles/153000260533-plans-and-what-s-included" },
    { name: "PolyBuzz: official product overview", url: "https://www.polybuzz.ai/En" },
    { name: "PolyBuzz: privacy policy", url: "https://www.polybuzz.ai/privacy-policy" },
    { name: "PolyBuzz: terms of use", url: "https://www.polybuzz.ai/terms-of-use" },
  ],
  "spicy-chat-ai-vs-girlfriendgpt": [
    { name: "SpicyChat: plans and features", url: "https://support.spicychat.ai/support/solutions/articles/153000260533-plans-and-what-s-included" },
    { name: "SpicyChat: operator disclosure", url: "https://spicychat.ai/pages" },
    { name: "GirlfriendGPT: product and operator disclosure", url: "https://www.gptgirlfriend.online/" },
    { name: "SpicyChat: realistic-image policy", url: "https://support.spicychat.ai/support/solutions/articles/153000260683-real-people-and-realistic-images" },
  ],
};

// Draft content is deliberately incomplete. Routes and hreflang must not use
// this object until all nine locales and all five comparisons are present.
export const localizedArticles: Partial<Record<Locale, Record<ComparisonSlug, LocalizedArticle>>> = {
  ja: {
    "spicychat-vs-character-ai": {
      title: "Spicy Chat AI と Character.AI：物語の自由度とルールを比較",
      description: "Spicy Chat AI と Character.AI を、成人向け表現、キャラクター作成、モデル選択、記憶、料金、年齢に関する現行ルールで比較します。",
      intro: "二つとも架空のキャラクターと会話できるサービスですが、同じ作品を別の画面で読むような違いではありません。SpicyChat は成人のロールプレイでモデルや記憶の設定を比較しやすい一方、Character.AI は独自モデルと安全基準を軸に物語を提供します。どちらの長所も、公開キャラクターの数だけでは判断できません。",
      dimensions: [
        ["表現の範囲", "成人の架空作品を扱うが、未成年・不同意・実在人物の性的描写は禁止", "ポルノは公式方針で不可。安全上のフィルタを運用"],
        ["設定の重心", "モデル、文脈の長さ、ペルソナ、記憶を分けて考える", "運営が管理するモデルとキャラクター体験を重視"],
        ["長編の検証", "有料プランごとに文脈や記憶機能が異なる", "過去ログの表示と実際の想起を区別して試す"],
        ["年齢に関する方針", "この比較は成人向け。利用前に現行規則を確認", "18歳未満の自由会話を終了する方針を発表。地域の適用状況を確認"],
      ],
      sections: [
        ["「フィルタなし」の意味を取り違えない", "SpicyChat が成人向けロールプレイを宣伝していても、何でも許可する意味ではありません。公式の短い規則は、未成年に見える登場人物、不同意の行為、実在する特定人物の性的描写などを禁じています。Character.AI はポルノをサポートしないと明記しています。刺激の強さだけを基準にせず、自分が書きたい物語が各社の現行方針に合うかを先に確認します。"],
        ["キャラクターの作りやすさと調整の深さ", "Character.AI では題材を探してすぐ会話を始める導線が分かりやすい場合があります。SpicyChat ではキャラクター設定に加え、モデル、ペルソナ、文脈、保存された記憶が結果に影響します。後者は調整の余地がある反面、一度に複数の設定を変えると何が効いたのか分かりません。同じ架空の人物像と冒頭場面を用い、まず初回の返答、次に十数ターン後の一貫性を比べます。"],
        ["未成年向けの古い記事に注意", "Character.AI の Safety Center に過去の年齢別説明が残っていても、同社は2025年に18歳未満の自由形式チャットを段階的に終了すると発表しました。対象地域や実装を一律に断定せず、現在の公式案内を読みます。この比較サイトは成人を対象にしており、年齢制限の回避方法を案内しません。"],
        ["長い会話と支払いを別々に試す", "SpicyChat の現行プラン表では無料と有料で文脈の長さ、Memory Manager、Semantic Memory 2.0 の利用可否が違います。Character.AI に同じ名前の機能がないからといって、会話の一貫性を単純に優劣へ変えるべきではありません。無害な架空の約束を冒頭で決め、話題を変えてから自然に戻し、再現性を記録します。費用は各社の購入画面で確認し、古い比較記事の価格を使い回さないことが重要です。"],
      ],
      verdict: "成人の架空物語でモデルや記憶の設定を自分で調整したいなら SpicyChat が候補です。より管理されたキャラクター体験を求め、Character.AI の表現ルールに合う物語なら後者を試せます。どちらも本当の相手ではなく、私的情報を打ち明ける場所として扱わないでください。",
    },
    "spicychat-vs-janitor-ai": {
      title: "Spicy Chat AI と Janitor AI：設定の手間と長編ロールプレイ",
      description: "Spicy Chat AI と Janitor AI の違いを、キャラクター設定、モデル選択の確認方法、長編の一貫性、規則、プライバシーで整理します。",
      intro: "Janitor AI という名称には似たドメインの別サイトもあるため、この比較でいう公式の入り口は janitorai.com です。SpicyChat と比べる際は「自由なロールプレイ」という共通イメージより、今その画面で使えるモデル、設定、履歴管理と規則を確かめる方が役立ちます。Janitor AI 側の細かい上限や課金を、裏付けのない数字で固定しません。",
      dimensions: [
        ["設定の読みやすさ", "現行プラン表で文脈、ペルソナ、記憶機能を確認できる", "利用画面でモデルや接続方法を確認。古い手順を前提にしない"],
        ["キャラクター", "コミュニティ作品と自作設定を併用", "コミュニティ作品の定義と冒頭文を個別に読む"],
        ["長編のテスト", "文脈と保存記憶を分けて評価", "履歴、選択モデル、設定ごとに再現性を調べる"],
        ["安全と個人情報", "SpicyChat の明文化された禁止事項を確認", "Janitor AI の現行規則と削除設定を公式画面で確認"],
      ],
      sections: [
        ["比較する前にドメインを確かめる", "検索結果には Janitor AI と似た名称の別サービスが混在します。機能、料金、規則を読むときは、自分が実際に開いた提供元のドメインを確かめてください。本稿は janitorai.com を比較対象とし、別ドメインの宣伝文句を公式の根拠として扱いません。SpicyChat については同社のサポート文書と現行プラン表を参照します。"],
        ["キャラクターカードを同条件に近づける", "既存の人気キャラクター同士を会話させるだけでは、サービス本体の違いと作者の文章力が混ざります。可能なら同じ成人の架空人物に、目的、避けたいこと、口調、冒頭の出来事を短く設定します。初回の返答が派手でも、その人物の動機が十数ターン後まで保たれるかを見ます。カードに個人情報や実在人物の写真を使う必要はありません。"],
        ["モデルと外部接続の費用を分ける", "Janitor AI のモデル接続方法や利用可能な選択肢は時期・アカウントで変わり得ます。外部サービスを使う画面がある場合は、その提供元の料金、データ条件、API キーの取扱いを別に確認してください。SpicyChat は現在、無料を含む段階的なプラン表を公開していますが、Memory Manager と Semantic Memory 2.0 は同じ特典ではありません。両方を同じ「無料無制限」の一語で比べると判断を誤ります。"],
        ["再現可能な長編テスト", "架空の場所と約束を二つ決め、片方を冒頭、もう片方を中盤で伝えます。別の話題へ移ってから、それぞれを直接たずね、正確な想起だけでなく、設定に沿って行動できるかを記録します。採点には使用モデル、プラン、キャラクター設定、再生成回数を書き残します。これは読者向けの検証手順であり、当サイトが両サービスを実測して優劣を確定した結果ではありません。"],
      ],
      verdict: "SpicyChat は公式資料で文脈と記憶のプラン差を追いやすいのが利点ですが、上位機能には有料条件があります。Janitor AI は現在利用できるモデルや接続方法を自分の画面で確かめる余地がある一方、古い手順や別ドメインの情報を混ぜると比較が崩れます。長編では設定と支出を記録してから選びます。",
    },
    "spicy-chat-ai-vs-crushon-ai": {
      title: "Spicy Chat AI と CrushOn AI：無料会話と上位モデルの違い",
      description: "Spicy Chat AI と CrushOn AI を、無料モデルの会話、上位モデルのクレジット、文脈、記憶、キャラクターの相性、支出で比較します。",
      intro: "どちらも成人の架空キャラクターとの会話を探すと候補になります。ただし「無料でチャットできる」と「使いたいモデルを制限なく使える」は違う問いです。CrushOn AI の公式記事は無料モデルの会話と上位モデルのクレジットを区別し、SpicyChat の公式表は文脈と記憶をプラン別に示します。宣伝の『無制限』より、自分が長く使う設定を比べましょう。",
      dimensions: [
        ["無料の範囲", "無料枠があるが記憶・文脈・モデルはプランで異なる", "無料モデルの会話と上位モデル用クレジットを区別"],
        ["長い会話", "文脈と Semantic Memory 2.0 の資格を別に読む", "メッセージ数、文脈、保存記憶を別々に確認"],
        ["キャラクター選び", "定義、冒頭文、モデル設定の組み合わせ", "発見のしやすさと実際の返答を分けて評価"],
        ["実際の費用", "使いたい上位機能のプランを確認", "上位モデル・追加パッケージの条件を確認"],
      ],
      sections: [
        ["「無制限」を分解する", "CrushOn AI の公式解説は、無料モデルのチャットと上位モデルに必要な月間クレジットを別の枠として説明しています。古いブログにある数字を全モデル共通の『会話回数』へ言い換えてはいけません。SpicyChat でも無料枠の有無だけでなく、モデル、返答の長さ、文脈、Memory Manager を別々に見ます。どちらも現在の購入画面が最終確認先です。"],
        ["文脈と記憶は別物", "長い履歴が画面に残ることと、次の返答でそのすべてを参照できることは同じではありません。SpicyChat のプラン表では無料と低位の有料枠が4,096トークン、高位の枠が8,192または16,384トークンの文脈として示されますが、変更され得る数字です。Semantic Memory 2.0 はさらに別の機能です。CrushOn AI についても同社が分けて説明する文脈、メモリ、モデルアクセスを現在のプランで照合します。"],
        ["自分の使い方で小さく試す", "同じ成人の架空キャラクター設定で、最初に無害な二つの事実を伝えます。会話を十数ターン進め、同じ約束へ戻したときの自然さ、設定の矛盾、再生成の必要性を記録します。可能なら無料モデルと関心のある上位モデルを分け、どの操作がクレジットを使うかもメモします。購入前にする試験であり、当サイトが実測した順位ではありません。"],
        ["プライバシーと継続費用", "親密な物語は実生活の秘密を書き込みやすいので、架空の名前と場所で試してください。利用履歴、保存記憶、公開キャラクターの見え方、退会方法は両社それぞれの現行説明で確認します。月額料金だけでなく、いつものモデルを何回使うか、長編の文脈が足りるか、追加クレジットが必要かを合計して判断します。"],
      ],
      verdict: "SpicyChat はプラン表でモデル・文脈・記憶の段階を読みたい人に向きます。CrushOn AI は無料モデルの会話と上位モデルのクレジットを分けて試したい人の候補です。どちらが安いかは利用モデルと月間の使い方で変わるため、固定価格の断定より現行の条件確認が重要です。",
    },
    "spicy-chat-ai-vs-polybuzz": {
      title: "Spicy Chat AI と PolyBuzz：発見しやすさか、会話設定か",
      description: "Spicy Chat AI と PolyBuzz のキャラクター発見、作成、公開範囲、プライバシー、文脈と記憶、無料利用を比較します。",
      intro: "PolyBuzz は多くのキャラクターを探して会話する体験を前面に出しています。SpicyChat はキャラクターだけでなく、モデル、文脈、ペルソナ、保存記憶まで調整する点が比較の軸です。カタログの大きさや『プライベート』という宣伝語だけでは、長編の一貫性やデータの扱いは判断できません。",
      dimensions: [
        ["入口", "キャラクターの設定とモデルを組み合わせる", "大量のキャラクターを閲覧して始めやすい"],
        ["公開ルール", "成人の架空作品にも明確な禁止事項がある", "公開の NSFW 表示を禁止し、推薦内容を審査"],
        ["会話の一貫性", "文脈と保存記憶のプラン差を確認", "実際に使えるモデル・記憶設定を画面で確認"],
        ["データの確認", "履歴とメモリの削除を調べる", "宣伝上の非公開会話とプライバシーポリシーを分けて読む"],
      ],
      sections: [
        ["キャラクター数は品質を測らない", "PolyBuzz は公式ページで大規模なキャラクター群と無料チャットを強調しています。最初の候補を見つけやすいのは利点ですが、同じ題材でも作者ごとに設定の密度が違います。SpicyChat でも人気のアバターだけで選ばず、冒頭文、目的、矛盾の少ない設定を読みます。両方で似た大人の架空人物を選び、日常会話と衝突場面の両方を試すと比較しやすくなります。"],
        ["公開と非公開を混同しない", "PolyBuzz は公開の NSFW コンテンツを禁じ、公開推薦に審査を行うと説明します。同社が一対一の会話をプライベートと宣伝することは、端末権限、保存、削除、問い合わせ時のデータ取扱いを読まなくてよい理由にはなりません。公式プライバシーポリシーには、入力文、写真、端末情報、権限などについての記載があります。SpicyChat 側の公開キャラクター規則と履歴設定も同じように確かめます。"],
        ["モデルとメモリを同条件で比較", "SpicyChat の現行表は文脈とメモリ関連機能を階層別に説明しています。PolyBuzz で同名の機能が見えなくても、ただちに記憶が弱いとは言えません。同じ架空の出来事を途中で一度だけ伝え、十数ターン後に参照できるか、口調を保てるかを自分のアカウントで確かめます。比較時はプランと選択モデルを記録し、サービスに公開されていない内部仕様を推測しません。"],
        ["無料体験を長期利用へ外挿しない", "短い無料チャットでは検索・発見の使いやすさを評価できますが、長編の費用や継続性は別問題です。キャラクターを切り替える頻度、保存したい物語の長さ、音声や画像の利用有無を先に決めます。端末アプリの権限は必要なものだけ認め、実在人物の写真、住所、職場、健康情報をキャラクター設定や会話へ入れないでください。"],
      ],
      verdict: "多くの設定済みキャラクターを探して気軽に始めたいなら PolyBuzz を見る価値があります。モデル・文脈・保存記憶まで追い込むなら SpicyChat の公式プランを確認します。いずれも『非公開』という一語だけで安全性を結論づけず、公開範囲とデータ処理を別々に読むべきです。",
    },
    "spicy-chat-ai-vs-girlfriendgpt": {
      title: "Spicy Chat AI と GirlfriendGPT：物語の操作と音声・画像",
      description: "Spicy Chat AI と GirlfriendGPT を、共通の運営表示、長編ロールプレイ、コンパニオン体験、音声・画像、アバター規則、費用で比較します。",
      intro: "二つは無関係な会社の競争ではありません。SpicyChat の公式ページは NextDay AI USA Inc を運営元とし、GirlfriendGPT の現行サイトも同社を運営者の一つとして表示します。この比較は企業の独立性ではなく、同じ成人の架空設定を使うときの製品体験を選ぶためのものです。",
      dimensions: [
        ["主な用途", "モデル、ペルソナ、記憶を調整する物語", "継続的なコンパニオン会話と音声・画像"],
        ["運営表示", "NextDay AI USA Inc と記載", "同社を含む NextDay AI 関連会社を記載"],
        ["画像の条件", "実在人物や実写に見えるアバターを禁じる現行規則", "画像生成機能を案内。自社の規則を別途確認"],
        ["費用の読み方", "欲しい記憶・音声・画像機能のプランを確認", "会話、音声、画像の実際の使用量を別に確認"],
      ],
      sections: [
        ["「別会社の代替」ではない", "両方の公式サイトに NextDay AI USA Inc の運営表示があります。名称も画面も異なりますが、親会社が完全に別だと説明するのは不正確です。複数社にデータを分散する目的で選ぶなら、この共通表示は重要です。同時に、契約主体やプライバシー条項が完全に同一だと推測してはいけません。登録前に各製品の現行規約を読みます。"],
        ["物語を制御するか、伴走感を重視するか", "SpicyChat はキャラクターの定義、モデル、ペルソナ、文脈、記憶を組み合わせて長い場面を設計できます。GirlfriendGPT の現行サイトは、キャラクターとの継続会話に加え、声や画像を体験の前面に置きます。優劣ではなく、言葉で物語を動かす時間が長いのか、メディアを交えた一人の相手との継続体験を求めるのかが選択の分かれ目です。"],
        ["画像の規則を横流ししない", "SpicyChat の現行アバター方針は、実在人物の写真だけでなく、実写と見分けにくい画像も禁じています。当サイトの成人モデル写真を、そのまま SpicyChat のキャラクター画像として使ってはいけません。GirlfriendGPT が画像生成を提供していても、SpicyChat と同じ画像規則がそのまま適用されるとは限りません。肖像、同意、保存、公開条件は各製品で確認します。"],
        ["同じ設定で支出と一貫性を測る", "成人の架空人物について、性格二点、守る約束一つ、話の舞台を一つ書きます。十二ターン程度の会話で約束を維持できるかを確かめ、利用可能なら音声または画像を一回だけ追加します。文字会話の再生成、メディア利用、待ち時間と課金単位を分けて記録してください。これは読者が再現できる評価案で、当サイトが実測した平均性能や月額費用ではありません。"],
      ],
      verdict: "自分で長編の挙動を組み立てたいなら SpicyChat、会話と音声・画像を組み合わせたコンパニオン体験を優先するなら GirlfriendGPT が候補です。ただし運営表示に重なりがあり、データ分散のための独立した二社比較とは扱えません。実際の条件と費用を各製品で確認してください。",
    },
  },
};
