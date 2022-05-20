import styled from "styled-components"
import Layout from "../components/Layout"

const References = () => {
  return (
    <Layout>
      <H3>参考文献</H3>
      <Div>
        <h4>一次文献</h4>
        <p>ニーチェ (1967)『ツァラツストラはこう言った』氷上英廣訳、岩波文庫</p>
        <p>ニーチェ (2009)『道徳の系譜学』中山元訳、光文社古典新訳文庫</p>
        <p>マルクス (2005)『資本論　第一巻(上)』、今村仁司・三島憲一・鈴木直訳、筑摩書房</p>
      </Div>
      <Div>
        <h4>二次文献</h4>
        <p>佐々木隆治(2016)『カール・マルクス』ちくま新書</p>
        <p>スラヴォイ・ジジェク (2015)『イデオロギーの崇高な対象』鈴木晶訳、河出文庫</p>
        <p>清水真木 (2018)『ニーチェ入門』ちくま学芸文庫</p>
        <p>竹田青嗣 (1994)『ニーチェ入門』ちくま新書</p>
        <p>渡辺二郎／西尾幹二 編 (2013)『ニーチェを知る事典』ちくま学芸文庫</p>
      </Div>
    </Layout>
  )
}

const H3 = styled.h3`
  margin:16px 0px;
  text-align:center ;
`;
const Div = styled.div`
  padding-bottom:60px;
  margin:0px 16px;
  h4 {
    margin:8px 0px;
  }
  p {
    margin-bottom:8px;
    font-size:16px;
  }
`;

export default References