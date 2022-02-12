export default function Faq() {
  return (
    <>
      <h2 className="text-4xl mb-4">FAQ</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl mb-2">How much is the minting price?</h3>
          <p>
            As of now the price is only 5 MATIC or 9.3 USD approximately. Anyway you can use <a href="https://www.coinbase.com/converter/matic/usd" className="text-blue-600 visited:text-purple-600 ...">this Coinbase convertor</a> to know current price.
          </p>
          <h3 className="text-2xl mb-2">What is current state of this project?</h3>
          <p>
            As noted in Roadmap it is in hidden state which means people can mint for surprise NFTs. Character details & other metadata will be available once project is revealed at opensea.
          </p>
          <h3 className="text-2xl mb-2">Tell us more about developer or creator of this project?</h3>
          <p>
            They want to be anonymous, but they is PRIDE member & will be available to meet in upcoming Pride Party this year. From sun sign they is <a href="https://en.wikipedia.org/wiki/Pisces_(astrology)" className="text-blue-600 visited:text-purple-600 ...">piscian</a>, live in Ohio, USA. 
          </p>
        </div>
      </div>
    </>
  );
}
