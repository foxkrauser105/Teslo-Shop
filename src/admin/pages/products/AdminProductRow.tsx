import { TableCell, TableRow } from '@/components/ui/table'
import type { Product } from '@/interfaces/product.interface'
import { currencyFormatter } from '@/lib/currency-formatter'
import { PencilIcon } from 'lucide-react'
import { Link } from 'react-router'

export const AdminProductRow = (product: Product) => {
  return (
    <>
        <TableRow>
            <TableCell>
            <img
                src={product.images[0]}
                alt={product.id}
                className="w-20 h20 object-cover rounded-md"
            />
            </TableCell>
            <TableCell>
                <Link 
                    to={`/admin/products/${product.id}`}
                    className='hover:text-blue-500 underline'
                >
                    {product.title}
                </Link>
            </TableCell>
            <TableCell>{currencyFormatter(product.price)}</TableCell>
            <TableCell>{product.gender}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.sizes.join(', ')}</TableCell>
            <TableCell className="text-right">
            <Link to={`/admin/products/${product.id}`}>
                <PencilIcon className='w-4 h-4 text-blue-500 ml-auto mr-5' />
            </Link>
            </TableCell>
        </TableRow>
    </>
  )
}
