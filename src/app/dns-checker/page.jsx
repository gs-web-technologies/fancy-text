
import DnsOverview from '@/components/dns-checker/DnsOverview';
import Form from '@/components/dns-checker/Form';


export default function DnsCheckerPage() {
    return (
        <div className='mx-auto w-[95%] grid grid-col-1 gap-2'>
           <Form />
           <DnsOverview />
        </div>
    );
}
