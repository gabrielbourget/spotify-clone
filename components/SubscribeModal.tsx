"use clientl";

import { ProductWithPrice } from "@/types";
import Modal from "./Modal";

type SubscriptModalProps = {
  products: ProductWithPrice[];
}

const SubscribeModal = (props: SubscriptModalProps) => {
  const { products } = props;
  
  let content = (
    <div className="text-center">
      No products available.
    </div>
  )

  return (
    <Modal
      title="Only for premium users"
      description="Listen to music with Spotify Premium"
      isOpen
      onChange={() => {}}
    >
      {content}
    </Modal>
  )
}

export default SubscribeModal