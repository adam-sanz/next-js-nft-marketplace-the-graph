import styles from "../styles/Home.module.css"
import NftCard from "../components/NftCard"
import SellingModal from "../components/SellingModal"
import ProceedsModal from "../components/ProceedsModal"
import networkMapping from "../constants/networkMapping"
import {
  GET_ACTIVE_ITEMS_GOERLI,
  GET_ACTIVE_ITEMS_MUMBAI,
  GET_ACTIVE_ITEMS_ARBITRUM_GOERLI,
} from "../constants/subgraphQueries"
import { Button, Radio } from "antd"
import { useLazyQuery } from "@apollo/client"
import { useAccount, useProvider, useNetwork } from "wagmi"
import { useEffect, useState } from "react"

export default function Home() {
  const { isDisconnected, address: userAddress } = useAccount()
  const { chain } = useNetwork()
  const [isItemsFiltered, setIsItemsFiltered] = useState(false)
  const [isSellingModalOpen, setIsSellingModalOpen] = useState(false)
  const [isProceedsModalOpen, setIsProceedsModalOpen] = useState(false)
  const [isWrongNetwork, setIsWrongNetwork] = useState(false)
  const [activeItems, setActiveItems] = useState([])
  const [marketplaceAddress, setMarketplaceAddress] = useState("")
  const chainId = chain ? chain.id.toString() : "31337"

  const [getGoerliData, { data: goerliData, refetch: refetchGoerliData }] =
    useLazyQuery(GET_ACTIVE_ITEMS_GOERLI)
  const [getMumbaiData, { data: mumbaiData, refetch: refetchMumbaiData }] =
    useLazyQuery(GET_ACTIVE_ITEMS_MUMBAI)
  const [
    getArbitrumGoerliData,
    { data: arbitrumGoerliData, refetch: refetchArbitrumGoerliData },
  ] = useLazyQuery(GET_ACTIVE_ITEMS_ARBITRUM_GOERLI)

  function handleChange(e) {
    if (e.target.value === "all" && chain.id == "5") {
      setIsItemsFiltered(false)
      refetchGoerliData()
      goerliData && setActiveItems(goerliData.activeItems)
    } else if (e.target.value === "all" && chain.id == "80001") {
      setIsItemsFiltered(false)
      refetchMumbaiData()
      mumbaiData && setActiveItems(mumbaiData.activeItems)
    } else {
      setIsItemsFiltered(true)
    }
  }

  useEffect(() => {
    if (networkMapping[chainId]) {
      setMarketplaceAddress(networkMapping[chainId]["NftMarketplace"][0])
    }

    if (chainId === "5") {
      refetchGoerliData()
      goerliData && setActiveItems(goerliData.activeItems)
      setIsWrongNetwork(false)
    } else if (chainId === "80001") {
      refetchMumbaiData()
      mumbaiData && setActiveItems(mumbaiData.activeItems)
      setIsWrongNetwork(false)
    } else if (chainId === "421613") {
      refetchArbitrumGoerliData()
      arbitrumGoerliData && setActiveItems(arbitrumGoerliData.activeItems)
      setIsWrongNetwork(false)
    } else {
      setIsWrongNetwork(true)
    }
  }, [chain, goerliData, mumbaiData, arbitrumGoerliData])

  return (
    <main className={styles.main}>
      <div className="content">
        <div className="home-container">
          <SellingModal
            isVisible={isSellingModalOpen}
            hideModal={() => setIsSellingModalOpen(false)}
          />
          <ProceedsModal
            isVisible={isProceedsModalOpen}
            hideModal={setIsProceedsModalOpen}
          />

          <div className="home-actions">
            {!isDisconnected ? (
              activeItems && activeItems?.length === 0 ? (
                <div></div>
              ) : (
                <div className="action-filters">
                  <div className="title">
                    <div>Filters</div>
                    <i className="fa-solid fa-filter"></i>
                  </div>
                  <Radio.Group
                    className="filter-group"
                    onChange={handleChange}
                    defaultValue="all"
                    buttonStyle="solid"
                    disabled={isWrongNetwork}
                  >
                    <Radio.Button className="filter-btn" value="all">
                      All
                    </Radio.Button>
                    <Radio.Button className="filter-btn" value="owned">
                      Your listings
                    </Radio.Button>
                  </Radio.Group>
                </div>
              )
            ) : (
              <div></div>
            )}

            <div className="home-actions-btns">
              <Button
                type="primary"
                className="mint-btn action-withdraw"
                onClick={() => setIsProceedsModalOpen(true)}
                disabled={isWrongNetwork}
              >
                Proceeds
              </Button>

              <Button
                type="primary"
                className="mint-btn action-sell"
                onClick={() => setIsSellingModalOpen(true)}
                disabled={isWrongNetwork}
              >
                Sell
              </Button>
            </div>
          </div>
          {!isDisconnected ? (
            !isWrongNetwork ? (
              activeItems && activeItems?.length === 0 ? (
                <div className="box-container error">
                  No NFT listed on the marketplace yet.
                </div>
              ) : (
                <div className="home-nft">
                  {activeItems &&
                    activeItems
                      .filter((nft) => {
                        return (
                          !isItemsFiltered ||
                          nft.seller.toLowerCase() === userAddress.toLowerCase()
                        )
                      })
                      .map((nft) => {
                        return (
                          <NftCard
                            key={`${nft.nftAddress}${nft.tokenId}`}
                            nftAttributes={nft}
                            marketplaceAddress={marketplaceAddress}
                          />
                        )
                      })}
                </div>
              )
            ) : (
              <div className="box-container error">
                You are on an unsupported network. Please change to Ethereum
                Goerli, Polygon Mumbai or Arbitrum Goerli.
              </div>
            )
          ) : (
            <div className="box-container error">
              You must connect your wallet to see recently listed NFTs.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
