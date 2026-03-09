import { Link } from "react-router"
import { PlusIcon } from "lucide-react"

import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { TableCaption, TableHeader, TableRow, TableHead, TableBody, Table } from "@/components/ui/table"
import { useProducts } from "@/shop/hooks/useProducts"
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading"
import { AdminProductRow } from "./AdminProductRow"

export const AdminProductsPages = () => {

  const { data, isLoading } = useProducts();

  return (
    <>
      
      <div className="flex justify-between items-center">

        <AdminTitle
          title="Products"
          subtitle="You can see and manage your products here"
        />
        <div className="flex justify-end mb-10 gap-4">
          <Link to="/admin/products/new">
            <Button >
              <PlusIcon />
              Add Product
            </Button>
          </Link>
        </div>
      </div>

      { isLoading && (
          <CustomFullScreenLoading />
        )
      }
      {
        !isLoading && (
          <>
            <Table className="bg-white p-10 shadow-xs border-gray-200 mb-10">
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Inventory</TableHead>
                  <TableHead>Sizes</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  data?.products.map(p => <AdminProductRow key={p.id} {...p} />)
                }
              </TableBody>
            </Table>

            <CustomPagination totalPages={data?.pages || 0} />
          </>
        )
      }

    </>
  )
}
