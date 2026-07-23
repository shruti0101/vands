import { categories } from "@/Data2";
import ProductPageClient from "./ProductPageClient";

// ✅ Dynamic metadata for each product
// export async function generateMetadata({ params }) {
//   const { id } = await params;

//   let product = null;

//   for (const category of categories) {
//     product = category.products?.find((p) => p.id === id);

//     if (!product) {
//       for (const sub of category.subcategory || []) {
//         product = sub.products?.find((p) => p.id === id);
//         if (product) break;
//       }
//     }

//     if (product) break;
//   }

//   console.log(product);

//   if (!product) {
//     return {
//       title: "Product Not Found",
//       description: "Product not found",
//     };
//   }

//   return {
//     title:
//       product.metaTitle ||
//       `${product.name} | Vands Engineering Solutions`,

//     description:
//       product.metaDescription ||
//       product.description?.[0]?.text ||
//       "",
//   };
// }



// ✅ Render client component
export default async function Page({params}) {
  const {productId}=await params;
return <ProductPageClient productId={productId}  />;
}
