import React from 'react';
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { dns_server } from '@/utils/dns-servers';
import Svgs from '@/components/svg-componet/Svgs';

function renderRecordChild(child) {
    switch (child.type) {
        case 'SRV': {
            return (<>
                {child.weight && <span className='text-xs'> {child.weight}</span>}
                {child.priority && <span className='text-xs'> {child.priority}</span>}
                {child.port && (<> <span className='text-xs'> {child.port}</span> <br /> </>)}
                {child.name && <span className='text-xs'> {child.name}</span>}
            </>);
            break;
        }

        case 'MX': {
            return (<>
                {child.priority && <span className='text-xs'>{child.priority}</span>}
                {child.exchange && <span className='text-xs'> {child.exchange}</span>}
            </>);
            break;
        }

        case 'CAA': {
            return (<>
                {child.critical && <span className='text-xs'>{child.critical}</span>}
                {child.issue && <span className='text-xs'> issue {child.issue}</span>}
                {child.issuewild && <span className='text-xs'> issuewild {child.issuewild}</span>}
                 {child.iodef && <span className='text-xs'> iodef {child.iodef}</span>}
            </>);
            break;
        }

        default: {
            {
                Object.entries(child).map(([key, value]) =>
                    key !== 'type' ? (
                        <span className='text-xs' key={key} style={{ marginRight: "10px" }}>
                            {key}: {value}
                        </span>
                    ) : null
                )
            }
        }
    }

}

function renderRecords(record) {
    if (!record) return <p>-</p>;

    if (Array.isArray(record) && record.length) { //[]
        return record.map((rec, i) => {

            if (Array.isArray(rec)) { //[[]]
                return (
                    <div key={i}>
                        {rec.map((item, index) => (
                            <span className='text-xs' key={index} style={{ marginRight: "10px" }}>
                                {item}
                            </span>
                        ))}
                    </div>
                );
            }

            if (typeof rec === 'object' && rec !== null) { //[{}]
                return (
                    <div key={i}>
                        {renderRecordChild(rec)}
                    </div>
                );
            }

            return (
                <div key={i}>
                    <span className='text-xs'>{rec}</span>
                </div>
            );
        });
    }


    if (!Array.isArray(record) && typeof record === 'object' && Object.keys(record).length) {
        return Object.entries(record).map(([key, value]) => (
            <span key={key}> {value} </span>
        ));
    }

    return '';
}


function CountryTable({ result }) {
    const data = dns_server;
    return (
        <div className="pt-5 w-full h-full">
            <div className=" h-full overflow-y-auto">
                <Table className="w-full h-full">
                    <TableHead>
                        <TableRow>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {(result && result.length > 0) ? (result.map((item, index) => (
                            <TableRow key={index} className="bg-white border-bottom dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="pl-2 w-2/5">
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

                                <TableCell className="whitespace-normal break-all font-small text-gray-900 dark:text-white align-center justify-start w-2/5 p-2">
                                    {item.success ? ((Array.isArray(item.success) && item.success.length > 0) ?
                                        renderRecords(item.records) : (typeof item.success === 'object' && Object.keys(item.success).length > 0 ?
                                            renderRecords(item.records) : (''))) : (
                                        ''
                                    )}

                                    {(!item.success && item.message) && (
                                        <div>{item.message}</div>
                                    )}
                                </TableCell>
                                <TableCell className="mx-auto my-auto w-1/5">
                                    {item.success ? ((Array.isArray(item.success) && item.success.length) ?
                                        (<Svgs type="tick" />) : (typeof item.success === 'object' && Object.keys(item.success).length ? (<Svgs type="tick" />) : (<Svgs type="cross" />))) : (<Svgs type="cross" />)}
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

                                    <TableCell></TableCell>

                                    <TableCell className='align-center px-4 justify-center'><Svgs type="hourglass" /></TableCell>

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