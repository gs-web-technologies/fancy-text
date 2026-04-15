
import DnsOverview from '@/components/dns-checker/DnsOverview';
import Form from './Form';


export default function DnsCheckerPage() {
    return (
        <div className='grid grid-col-1 gap-2'>
           <Form />
           <DnsOverview />
        </div>
    );
}
