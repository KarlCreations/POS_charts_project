import {
    Bar, XAxis, YAxis,
    Tooltip, ResponsiveContainer,
    BarChart,
} from 'recharts';
import {productCategorySoldData} from '@/data/chart-data';

export default function product_category_charts() {
    return (
        <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productCategorySoldData}>
                    <XAxis dataKey="products" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="quantity" fill="#ffffff" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
