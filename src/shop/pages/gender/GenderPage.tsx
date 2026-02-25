import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mocks/products.mock"
import { URLParamKeysTypes } from "@/shared/types/URLParamKeysTypes"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"
import { useParams } from "react-router"

export const GenderPage = () => {

  const { gender } = useParams();

  const GetGenderLabel = (gender: string | undefined): string => {
    switch(gender) {
        case URLParamKeysTypes.GenderMen:
          return 'Hombres';
        case URLParamKeysTypes.GenderWomen:
          return 'Mujeres';
        case URLParamKeysTypes.GenderKid:
          return 'Niños';
        default:
          return 'Todos';
    }
  }

  return (
    <>
      <CustomJumbotron title={`Productos para ${GetGenderLabel(gender)}`}/>
      <ProductsGrid products={products} />
      <CustomPagination totalPages={7} />
    </>
  )
}
