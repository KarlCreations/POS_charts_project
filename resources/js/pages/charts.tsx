import { Head } from '@inertiajs/react';
import MonthlySalesCharts from '@/components/charts/monthly_sales_charts';
import ProductCategoryCharts from '@/components/charts/product_category_charts';
import ProductCategorySoldPiecharts from '@/components/charts/product_category_sold_piecharts';

export default function charts() {
    const widgets = [
        ['Monthly Sales', <MonthlySalesCharts />],
        ['Number of Sold Products by Category', <ProductCategoryCharts />],
        ['Product Category Sales Distribution', <ProductCategorySoldPiecharts />],
    ] as const;

    return (
        <main className="min-h-screen bg-slate-50 p-6">
            <Head title="Business Performance" />
            <h1 className="text-3xl font-bold">Business Performance</h1>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {widgets.map(([title, chart]) => (
                    <section key={title} className="rounded-xl bg-white p-6 shadow">
                        <h2 className="mb-4 font-semibold">{title}</h2>
                        {chart}
                    </section>
                ))}
            </div>
        </main>    
    )

}
