import { useSearchParams } from 'react-router';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { PaginationFactory } from '@/shared/utils/paginationUtils';
import type { IPagination } from '@/shared/interfaces/IPagination';
import { TabsTypes } from '@/shared/types/TabsTypes';
import { URLParamKeysTypes } from '@/shared/types/URLParamKeysTypes';

interface Props {
    totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const pagination: IPagination = PaginationFactory.CreatePaginationObject(searchParams.get(URLParamKeysTypes.Page), "0", TabsTypes.All);

    const page: number = pagination.page;

    const SetPagination = (page: number) => {

        if (page < 1 || page > totalPages) {
          return;
        }

        const newPagination: IPagination = PaginationFactory.CreatePaginationObject(page.toString(), pagination.limit.toString(), pagination.category);
        
        setSearchParams((prev) => {
          prev.set(URLParamKeysTypes.Page, newPagination.page.toString());
          return prev;
        });
    }

  return (
    <div className="flex items-center justify-center space-x-2">
          <Button variant="outline" size="sm" 
            disabled={page === 1}
            onClick={() => SetPagination(page - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </Button>

          { 
            Array.from( {length: totalPages} ).map((_, index) => {
                return <Button key={index} 
                variant={
                    page === index + 1 ? "default" : "outline"
                }
                onClick={() => SetPagination(index + 1)} 
                size="sm">
                    {index + 1}
                </Button>
            })
          }

          <Button variant="outline" size="sm"
            disabled={page === totalPages}
            onClick={() => SetPagination(page + 1)}
          >
            Siguiente
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
  )
}
