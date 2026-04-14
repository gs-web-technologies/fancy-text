import React from 'react';
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { dns_server } from '@/utils/dns-servers';

function renderRecords(record) {
    if (!record) return <p>-</p>;

    if (Array.isArray(record) && record.length) {
        return record.map((rec, i) => {

            if (Array.isArray(rec)) {
                return (
                    <div key={i}>
                        {rec.map((item, index) => (
                            <span key={index} style={{ marginRight: "10px" }}>
                                {item}
                            </span>
                        ))}
                    </div>
                );
            }

            if (typeof rec === 'object' && rec !== null) {
                return (
                    <div key={i}>
                        {Object.entries(rec).map(([key, value]) =>
                            key !== 'type' ? (
                                <span key={key} style={{ marginRight: "10px" }}>
                                    {key}: {value}
                                </span>
                            ) : null
                        )}
                    </div>
                );
            }

            return (
                <div key={i}>
                    <span>{rec}</span>
                </div>
            );
        });
    }


    if (!Array.isArray(record) && typeof record === 'object' && Object.keys(record).length) {
        return Object.entries(record).map(([key, value]) => (
            <span key={key}>{value}</span>
        ));
    }

    return <p>-</p>;
}


function CountryTable({ result }) {
    const data = dns_server;
    return (
        <div className="pt-5 w-full h-full">
            <div className="w-[430px] h-full overflow-y-auto">
                <Table className="w-full h-full">
                    <TableHead>
                        <TableRow>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {(result && result.length > 0) ? (result.map((item, index) => (
                            <TableRow key={index} className="bg-white border-bottom dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="pl-2">
                                    <div className='flex align-center gap-2'>
                                        <div className='rounded'>
                                            <img src={item.flag} className='rounded' />
                                        </div>
                                        <div>
                                            {item.location} <br />
                                        </div>
                                    </div>
                                    <p className='pt-2'>{item.provider}</p>
                                </TableCell>

                                <TableCell className="whitespace-normal break-all font-medium text-gray-900 dark:text-white align-center">
                                    {item.success ? ((Array.isArray(item.success) && item.success.length) ?
                                        renderRecords(item.records) : (typeof item.success === 'object' && Object.keys(item.success).length ?
                                            renderRecords(item.records) : (<p>-</p>))) : (
                                        <p>-</p>
                                    )}

                                    {(!item.success && item.message) && (
                                        <div>{item.message}</div>
                                    )}
                                </TableCell>
                                <TableCell className="align-center px-4">
                                    {item.success ? ((Array.isArray(item.success) && item.success.length) ? "✅" : (typeof item.success === 'object' && Object.keys(item.success).length ? "✅" : "❌")) : "❌"}
                                </TableCell>
                            </TableRow>
                        ))) : (
                            dns_server.map((item, index) => (
                                <TableRow key={index} className="bg-white border-b">
                                    <TableCell className="pl-2">
                                        <div className='flex align-center gap-2'>
                                            <div className='rounded'>
                                                <img src={item.flag} className='rounded' />
                                            </div>
                                            <div>
                                                {item.location} <br />
                                            </div>
                                        </div>
                                        <p className='pt-2'>{item.provider}</p>
                                    </TableCell>

                                    <TableCell>-</TableCell>

                                    <TableCell>⏳</TableCell>

                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default CountryTable