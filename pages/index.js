import { useMoralis } from "react-moralis"
import { useState, useEffect } from "react"
import NFTBox from "../components/NFTBox"
import networkMapping from "../constants/networkMapping.json"
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries"
import { useQuery } from "@apollo/client"

export default function Home() {
  const [data, setData] = useState([])
  const { isWeb3Enabled, chainId } = useMoralis()
  const chainString = chainId ? parseInt(chainId).toString() : "31337"
  const marketplaceAddress = networkMapping[chainString].NftMarketplace[0]
  useEffect(() => {
    console.log("dataaaaaa", data)
    console.log(
      "data.activeItems",
      data ? data.activeItems : "no active items found"
    )
  }, [data])
  const {
    loading,
    error,
    data: listedNfts,
  } = useQuery(GET_ACTIVE_ITEMS, { onCompleted: setData })
  return (
    <div className="container mx-auto">
      <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
      <div className="flex flex-wrap">
        {isWeb3Enabled ? (
          loading || data.activeItems.length === 0 ? (
            <div>Loading...</div>
          ) : (
            data.activeItems.map((nft) => {
              console.log(nft)
              const { price, nftAddress, tokenId, seller } = nft
              return (
                <NFTBox
                  price={price}
                  nftAddress={nftAddress}
                  tokenId={tokenId}
                  marketplaceAddress={marketplaceAddress}
                  seller={seller}
                  key={`${nftAddress}${tokenId}`}
                />
              )
            })
          )
        ) : (
          <div>Web3 Currently Not Enabled</div>
        )}
      </div>
    </div>
  )
}
