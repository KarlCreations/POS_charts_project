import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
} from 'recharts';
import {productCategorySoldData} from '@/data/chart-data';

export default function product_category_sold_piecharts() {
    return (
        <div className = "h-72">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie data = {productCategorySoldData} dataKey = "quantity"
                    nameKey = "products" outerRadius = {95} label>
                        {productCategorySoldData.map((item) => (
                            <Cell key = {item.products} fill={item.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}