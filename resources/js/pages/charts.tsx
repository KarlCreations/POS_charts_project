import { Head } from '@inertiajs/react';
import monthly_sales_charts from '@/components/charts/monthly_sales_charts';
import product_category_charts from '@/components/charts/product_category_charts';
import product_category_sold_piecharts from '@/components/charts/product_category_sold_piecharts';

export default function charts() {
    const widgets = [
        ['Monthly Sales', monthly_sales_charts],
        ['Number of Sold Products by Category', product_category_charts],
        ['Product Category Sales Distribution', product_category_sold_piecharts],
    ] as const;

    return (
        <></>)

}
