
// 論文の要約

import styled from "styled-components"
import Layout from "../components/Layout"

const Home = () => {

  const prerequisite = "真理という言葉は定義上、一つの事象に対して一つの意味しか持ちえない、しかし人類の歴史において真理と呼ばれる一つの言葉に対応する、もしくは対応していた事象は多数存在している。そこで私は、真理という存在に対応する、普遍的な一つの意味を見出したいと考えた。"

  const whyNietzsche = "また、なぜニーチェをとりあげるのか、それは『道徳の系譜学』の中の「人間意志は一つの目標を必要とする」 という一節に強く惹かれたからである。これまでの真理が間違っていて、真理というものが本当にあるかもわからないが、人間はそれでも真理を求める存在である。という真理に対する人間の立ち位置に対する非常に興味深い考察であるように思えたからである。"

  const problemPresentation = "ニヒリズムを語るうえで真理は避けて通れない疑問であり、真理はの定義は「真理についての疑問」でも述べたように、一つの事象に対して一つの意味である。しかし、ニヒリズムの結論には相対性を有する矛盾が存在している。"

  const problemPresentation1 = "ニヒリズムの原因、過程、結果という道筋は概ね正しいように思われる。問題は結論で述べられている、「真理」という事象に起因するのではと考えた。"

  const roughSolution = "ニーチェの結論が相対性を有するのは、各個人の持っている真理像違うからであり、共通の真理像を各個人が共有していないからではないか？"

  const detailSolution = [
    { solution: "共通の真理像という概念はどういった存在なのだろうか?" },
    { solution: "共有の真理像はどのように出現するのか？" },
    { solution: "共有の真理像があるとして、その真理像はどこまで広がるのか？" },
  ]

  return (
    <Layout>

      {/* <TitleDiv>
        <Title>ニヒリズムを通して真理のあり方を考える</Title>
        <SubTitle>Considering the state of truth through nihilism</SubTitle>
      </TitleDiv> */}

      <Body>

        <Section>
          <SectionHeaderDiv>
            <SectionTitle>本稿のテーマ</SectionTitle>
          </SectionHeaderDiv>
          <MiniTitle>真理についての疑問</MiniTitle>
          <Text>{prerequisite}</Text>
          <MiniTitle>なぜニーチェか</MiniTitle>
          <Text>{whyNietzsche}</Text>
        </Section>

        <Section>
          <SectionHeaderDiv>
            <SectionTitle>問題</SectionTitle>
          </SectionHeaderDiv>
          <Text>{problemPresentation}</Text>
          <MiniTitle>ニーチェの命題</MiniTitle>
          <List>
            <Bullets >「真理など存在しない。」</Bullets>
            <Bullets >「すべての価値と道徳は無価値である」</Bullets>
            <Bullets >「無こそが真理である」</Bullets>
          </List>
          <MiniTitle>命題の疑問点1</MiniTitle>
          <Text>真理は存在しないと述べているにもかかわらず、無こそが真理である。と真理が存在しないことが真理であるという命題の矛盾である。</Text>
          <MiniTitle>命題の疑問点2</MiniTitle>
          <Text>全ての価値と道徳は無価値である。いう主張は相対性を許容してしまうように思える。</Text>
        </Section>

        <Section>
          <SectionHeaderDiv>
            <SectionTitle>解決策</SectionTitle>
          </SectionHeaderDiv>
          <Text>{problemPresentation1}</Text>
          <MiniTitle>問題をどう考えていくか</MiniTitle>
          <Text>キリスト教の時代においては、「キリスト教の道徳」は一つの真理として機能していた。とニーチェは指摘している。</Text>
          <UnderArrow>⬇︎</UnderArrow>
          <Text>ニーチェは「キリスト教の道徳」は、本来の価値を反転させたものだと『道徳の系譜学』において述べている</Text>
          <UnderArrow>⬇︎</UnderArrow>
          <Text>価値が反転したということが事実であれば、真理が反対の方向に向いたということであり、どのように反転したかを読み解くことは本稿のテーマを解決しうるのではないかと考えた。</Text>
        </Section>

        <Section>
          <SectionHeaderDiv>
            <SectionTitle>どのように反転が起こったのか</SectionTitle>
          </SectionHeaderDiv>
          <MiniTitle>本来の価値</MiniTitle>
          <Text>ニーチェは「善、良い」という価値は精神的、肉体的に強い者の自信に由来するものであり、その反対の「悪、悪い」は前者以外をただ価値づけたに過ぎず、どちらが良い悪いではなく、相対的な善悪に過ぎなかったと述べている。 </Text>
          <MiniTitle>反転した価値</MiniTitle>
          <Text>ルサンチマンと呼ばれる妬みを持った人間は、本来の「善、良い」人間に対して、金銭的、肉体的に劣っている事実から逃避し、宗教における死後の世界や神といった形而上学的価値を持ち出し、その価値観では我々は正しいと評価することで自己の存在を肯定しているとニーチェは『道徳の系譜学』で指摘している。</Text>
        </Section>

        <Section>
          <SectionHeaderDiv>
            <SectionTitle>なぜ反転することができたのか</SectionTitle>
          </SectionHeaderDiv>
          <MiniTitle>ニーチェの価値についての引用</MiniTitle>
          <Text>「人間そのものが、自分について考えるときにも、まず計算できるものに、規則的なものに、必然的なものにならなければならないのである。」 とニーチェは述べており、人間は、「すべてものには価値がある。どんなものでも金を払えば手に入れることができる。」 と認識し、その発展として、あらゆる価値は計算可能で、客観視できうるとも述べている。</Text>
          <MiniTitle>価値観とは</MiniTitle>
          <Text>ニーチェは価値の反転が起こった要因として、「キリスト教的道徳」をあげているが、例えば「キリスト教的道徳」を全く違う地域で広めても、その価値観は意味を持たないのである。つまり価値というのは共通の認識が前提として存在しているということではないいだろうか。</Text>
          <MiniTitle>マルクスの貨幣論</MiniTitle>
          <Text>本来は人間側に主体性があるはずが、物象化が起こると、たちまち物それ自体が主体性を有しているように錯覚してしまうと指摘している。そして、物象化が起こるのは共通の貨幣という共通認識のもとである。
          </Text>
          <MiniTitle>まとめ</MiniTitle>
          <Text>ニーチェの引用にもあるように、いずれの価値も計算可能であると考えるならば、価値同士の比較も可能ではないだろうか。この考え方は、はじめにでも述べた多くの真理についても比較可能であるということであり、共通の真理というものをどのように導き出したら良いのだろうか。
          </Text>
        </Section>

        <Section>
          <SectionHeaderDiv>
            <SectionTitle>これからの本稿</SectionTitle>
          </SectionHeaderDiv>
          <Text>{roughSolution}</Text>
          <MiniTitle>疑問点</MiniTitle>
          <List>
            {detailSolution.map((index, key) => {
              return <Bullets key={key}>{key + 1}　{index.solution}</Bullets>
            })}
          </List>
        </Section>

      </Body>
    </Layout >
  )
}

const Body = styled.div`
  padding:16px;
  padding-bottom:45px;
  background-color:#ececec;
`;

const Section = styled.div`
  margin-bottom:24px;
  border:1px solid black;
  background-color:white;
  `;

const SectionHeaderDiv = styled.div`
  background-color:black;
  padding:5px 0px;
  `;

const SectionTitle = styled.p`
  font-size:16px;
  color:white;
  text-align:center;
  font-weight:bold;
  `;

const MiniTitle = styled.p`
  margin-top:16px;
  padding-left:16px;
  font-size:16px;
  font-weight:bold;
`;

const Text = styled.p`
  margin:16px;
`;

const UnderArrow = styled.p`
  text-align:center;
  font-size:18px;
  margin:0px;
`;

const List = styled.div`
  margin:16px;
`;

const Bullets = styled.p`
  margin-bottom:8px;
`;



export default Home

// problemPresentation


// 真理像の共有とは何か？

// 「キリスト教の道徳」が真理とされてきたが、これが意図する疑問は何か？






// ・文字の区切りがおかしい, 書式に則っていない

// ・グローバル化
// ・キリスト教
// ・シンプルになった

// ・マルクスを持ち出す意図
// ・この論文でいう、真理とは
// ・着地点

