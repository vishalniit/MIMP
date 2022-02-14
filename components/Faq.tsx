export default function Faq() {
  return (
    <>
      <h2 className="text-4xl mb-4">FAQ</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl mb-2">What is this project about?</h3>
          <p>
          <b>MIMP - My Pride My Identity</b> The word <b>‘pride’</b>, is an integral cultural concept within the Lesbian, Gay, Bisexual, Transgender, Queer, Intersex  <b>(LGBTQI)</b> community, representing solidarity, collectivity, and identity as well as resistance to discrimination and violence.<br/> Its associated symbolism (e.g., <b>rainbow</b> colors) communicates to individuals that LGBTQI members are welcome as valuable members of the community. <br/> # <b>MIMP</b> are non-fungible tokens <b>(NFTs)</b> represents unique digital identity represented by hundreds of unique bits of random color geometrical shapes on pride flag. Each identity's digital representation is associated with a unique <b>quote</b>. Collect whichever represents you with the Pride Flag.
          </p>
          <h3 className="text-2xl mb-2">How i can buy?</h3>
          <p>
          First you need a wallet, I mean crypto wallet like <a className="text-green-600 visited:text-white-600 ..." href="https://youtu.be/YVgfHZMFFFQ" rel="noopener noreferrer"
              target="_blank" data-tip="MetaMask">Metamask.</a> Follow <a className="text-green-600 visited:text-white-600 ..." rel="noopener noreferrer"
              target="_blank" href='https://metamask.io/download/' data-tip="Download MetaMask">this page</a> to see demo & install for yourself. <br/>Once you have wallet then you can click on connect below to mint NFT to your wallet. Once you mint it, you can also see your ownership on NFT marketplace like <a href={process.env.NEXT_PUBLIC_OPENSEA_URL}
              aria-label={`${process.env.NEXT_PUBLIC_NFT_NAME} on OpenSea`}
              rel="noopener noreferrer"
              target="_blank"
              data-tip="OpenSea" className="text-green-600 visited:text-white-600 ...">opensea here.</a>
          </p>
          <h3 className="text-2xl mb-2">How much is the minting price?</h3>
          <p>
            As of now the price is only 5 MATIC or 9.3 USD approximately. Anyway you can use <a href="https://www.coinbase.com/converter/matic/usd" className="text-green-600 visited:text-white-600 ..." rel="noopener noreferrer"
              target="_blank" data-tip="Coinbase">this Coinbase convertor</a> to know current price.
          </p>
          <h3 className="text-2xl mb-2">What is current state of this project?</h3>
          <p>
            As noted in Roadmap it is in hidden state which means people can mint for surprise NFTs. Character details & other metadata will be available once project is revealed at opensea.
          </p>
          <h3 className="text-2xl mb-2">Tell us more about developer or creator of this project?</h3>
          <p>
            They want to be anonymous, but they is PRIDE member & will be available to meet in upcoming Pride Party this year. From sun sign they is <a href="https://en.wikipedia.org/wiki/Pisces_(astrology)" rel="noopener noreferrer"
              target="_blank" className="text-green-600 visited:text-white-600 ..." data-tip="Piscian">piscian</a>, live in Ohio, USA. 
          </p>
        </div>
      </div>
    </>
  );
}
