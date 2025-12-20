"use client";
const ProductByIdError = ({error}) => {
  return (
    <div className="text-center text-red-600">{error.message}</div>
  )
}

export default ProductByIdError;