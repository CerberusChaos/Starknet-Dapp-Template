import { installWallet } from "@/utils";
import { useAccount, useConnect, useDisconnect } from "@starknet-react/core";
import { useMemo } from "react";

function WalletConnected() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const shortenedAddress = useMemo(() => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  return (
    <div className="font-medium text-sm">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-wallet">
          {shortenedAddress}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>
              {" "}
              <button onClick={() => disconnect()}>Disconnect</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ConnectWallet() {
  const { connectors, connect } = useConnect();

  return (
    <div>
      <button
        className="btn btn-wallet font-medium text-sm"
        onClick={() =>
          (
            document.getElementById("my_modal_3") as HTMLDialogElement
          )?.showModal()
        }
      >
        Connect Wallet
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-black">Select Wallet</h3>
          <div className="join join-vertical w-2/3 mt-7 flex mx-auto">
            {connectors.map((connector) => {
              return (
                <button
                  key={connector.id}
                  onClick={(e) => {
                    if (!connector.available()) {
                      installWallet(connector.id, e);
                    }
                    connect({ connector });
                  }}
                  className="btn join-item hover:bg-[#8B5FBF]"
                >
                  <img
                    className="w-7 h-7 mr-2"
                    src={`https://iconic.dynamic-static-assets.com/icons/sprite.svg#${connector.id.toLocaleLowerCase()}`}
                  />
                  Connect{" "}
                  {connector.id.charAt(0).toUpperCase() + connector.id.slice(1)}
                </button>
              );
            })}
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default function WalletBar() {
  const { address } = useAccount();

  return address ? <WalletConnected /> : <ConnectWallet />;
}
