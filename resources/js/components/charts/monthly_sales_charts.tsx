import {
    LineChart, Line, XAxis, YAxis,
    Tooltip, ResponsiveContainer,
} from 'recharts';
import {monthlySalesData} from '@/data/chart-data';

export default function monthly_sales_charts() {
    return (
        <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlySalesData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line dataKey="sales" stroke="#000000" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
