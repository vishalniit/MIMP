import IframeResizer from 'iframe-resizer-react';

export default function OpenSeaEmbed() {
  return (
    <>
      <h2 className="text-4xl mb-4">OpenSea Collection</h2>
      <div className="space-y-4">
        <div>
        <IframeResizer log
          src="https://opensea.io/collection/myidentitymypride"
          style={{ width: '1px', minWidth: '100%', height: '1800px'}}
        />
        </div>
      </div>
    </>
  );
}
