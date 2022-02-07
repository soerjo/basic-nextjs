import { useRouter } from "next/router";

function ReviewPage() {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <div>
      <h1>
        review {reviewId} dari product {productId}
      </h1>
    </div>
  );
}

export default ReviewPage;
