'use client'
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [loanTenure, setLoanTenure] = useState(20);
    const [emi, setEmi] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [showAmortization, setShowAmortization] = useState(false);
    const [amortizationSchedule, setAmortizationSchedule] = useState([]);

    // Calculate EMI whenever inputs change
    useEffect(() => {
        calculateEMI();
    }, [loanAmount, interestRate, loanTenure]);

    const calculateEMI = () => {
        const principal = loanAmount;
        const rate = interestRate / 12 / 100;
        const time = loanTenure * 12;

        // EMI formula: [P x R x (1+R)^N]/[(1+R)^N-1]
        const emiValue = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
        const totalPaymentValue = emiValue * time;
        const totalInterestValue = totalPaymentValue - principal;

        setEmi(emiValue);
        setTotalPayment(totalPaymentValue);
        setTotalInterest(totalInterestValue);

        // Generate amortization schedule
        generateAmortizationSchedule(principal, rate, time, emiValue);
    };

    const generateAmortizationSchedule = (principal, rate, time, emiValue) => {
        let balance = principal;
        let schedule = [];

        for (let month = 1; month <= time; month++) {
            const interest = balance * rate;
            const principalPaid = emiValue - interest;
            balance -= principalPaid;

            schedule.push({
                month,
                emi: emiValue.toFixed(2),
                principal: principalPaid.toFixed(2),
                interest: interest.toFixed(2),
                balance: Math.abs(balance).toFixed(2)
            });
        }

        setAmortizationSchedule(schedule);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <>
            <Header />

            <main className="pt-24 pb-12 mt-20 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Loan EMI Calculator</h1>
                        <p className="text-xl text-gray-600">
                            Calculate your monthly EMI payments and plan your home purchase better
                        </p>
                    </div>

                    {/* Calculator Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Calculator Form */}
                        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
                            <div className="space-y-6">
                                {/* Loan Amount */}
                                <div>
                                    <label className="block text-lg font-medium text-gray-700 mb-2">
                                        Loan Amount (₹)
                                        <span className="text-blue-600 ml-2">
                                            {formatCurrency(loanAmount)}
                                        </span>
                                    </label>
                                    <input
                                        type="range"
                                        min="100000"
                                        max="50000000"
                                        step="10000"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>₹1L</span>
                                        <span>₹1Cr</span>
                                        <span>₹2Cr</span>
                                        <span>₹3Cr</span>
                                        <span>₹4Cr</span>
                                        <span>₹5Cr</span>
                                    </div>
                                </div>

                                {/* Interest Rate */}
                                <div>
                                    <label className="block text-lg font-medium text-gray-700 mb-2">
                                        Interest Rate (% p.a.)
                                        <span className="text-blue-600 ml-2">{interestRate}%</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="6.5"
                                        max="15"
                                        step="0.1"
                                        value={interestRate}
                                        onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>6.5%</span>
                                        <span>9%</span>
                                        <span>12%</span>
                                        <span>15%</span>
                                    </div>
                                </div>

                                {/* Loan Tenure */}
                                <div>
                                    <label className="block text-lg font-medium text-gray-700 mb-2">
                                        Loan Tenure (Years)
                                        <span className="text-blue-600 ml-2">{loanTenure} Years</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="30"
                                        step="1"
                                        value={loanTenure}
                                        onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                                        <span>1Y</span>
                                        <span>10Y</span>
                                        <span>20Y</span>
                                        <span>30Y</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Results Panel */}
                        <div className="bg-blue-600 text-white rounded-xl shadow-md p-8">
                            <h2 className="text-2xl font-bold mb-6">Your EMI Summary</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-blue-500">
                                    <span className="text-blue-100">Monthly EMI</span>
                                    <span className="text-2xl font-bold">{formatCurrency(emi)}</span>
                                </div>

                                <div className="flex justify-between items-center pb-4 border-b border-blue-500">
                                    <span className="text-blue-100">Principal Amount</span>
                                    <span>{formatCurrency(loanAmount)}</span>
                                </div>

                                <div className="flex justify-between items-center pb-4 border-b border-blue-500">
                                    <span className="text-blue-100">Total Interest</span>
                                    <span>{formatCurrency(totalInterest)}</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-blue-100">Total Payment</span>
                                    <span className="text-xl font-semibold">{formatCurrency(totalPayment)}</span>
                                </div>

                                <button
                                    onClick={() => setShowAmortization(!showAmortization)}
                                    className="w-full mt-6 py-2 px-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                                >
                                    {showAmortization ? 'Hide Payment Schedule' : 'View Full Payment Schedule'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Amortization Schedule */}
                    {showAmortization && (
                        <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
                            <h2 className="text-2xl font-bold p-6 border-b">Amortization Schedule</h2>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMI (₹)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal (₹)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest (₹)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance (₹)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {amortizationSchedule.slice(0, 12).map((row, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.month}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.emi}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.principal}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.interest}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.balance}</td>
                                            </tr>
                                        ))}
                                        <tr className="bg-gray-50">
                                            <td colSpan="5" className="px-6 py-4 text-center text-sm text-gray-500">
                                                Showing first 12 months of {loanTenure * 12} payments
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Information Section */}
                    <div className="mt-12 bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-4">About Home Loan EMI</h2>
                        <div className="prose max-w-none">
                            <p>
                                An <strong>Equated Monthly Installment (EMI)</strong> is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month, so that over a specified number of years, the loan is paid off in full.
                            </p>

                            <h3 className="text-xl font-semibold mt-6 mb-3">How EMI is Calculated</h3>
                            <p>
                                The EMI calculation uses the following formula:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg my-4">
                                <p className="font-mono text-sm">
                                    EMI = [P × R × (1+R)^N] / [(1+R)^N-1]
                                </p>
                            </div>
                            <p>
                                Where:
                            </p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>P</strong> = Principal loan amount</li>
                                <li><strong>R</strong> = Monthly interest rate (annual rate divided by 12)</li>
                                <li><strong>N</strong> = Loan tenure in months</li>
                            </ul>

                            <h3 className="text-xl font-semibold mt-6 mb-3">Tips for Home Loan Borrowers</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Try to make a down payment of at least 20% of the property value</li>
                                <li>Opt for shorter tenures to reduce total interest payments</li>
                                <li>Consider prepayment options to reduce your loan burden</li>
                                <li>Compare interest rates from multiple lenders before finalizing</li>
                                <li>Factor in additional costs like processing fees and insurance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default EMICalculator;