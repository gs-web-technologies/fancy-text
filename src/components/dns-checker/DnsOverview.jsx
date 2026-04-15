import React from 'react'
import Svgs from '../svg-componet/Svgs'

function DnsOverview() {
  return (
    <div className="text-black mt-2 bg-white p-4 rounded shadow-lg">
      <h1><b>How to Use the DNS Checker?</b></h1>
      <div className='w-[85%] text-justify'>
        <p>
          Quickly check DNS propagation for any domain using our tool. It connects to numbers of DNS servers across the globe, allowing you to verify DNS updates from multiple regions with ease. Instead of showing only text-based results, it also visualizes propagation status on a map.
        </p>

        <p>
          This visual representation helps you understand how DNS updates are spreading worldwide. It makes it easier to detect regional delays or inconsistencies and gives you better control over monitoring your DNS records.
        </p>

        <p>
          Follow the steps below to perform a DNS propagation check:
        </p>
      </div>

      <h2><b>Enter the Domain or Hostname</b></h2>

      <div className='w-[85%] text-justify'>
        <p>
          Start by entering the domain name or hostname you want to test for DNS propagation.
        </p>

        <h2><b>Select DNS Record Type</b></h2>
        <p>
          Choose the DNS record type you want to verify from the dropdown next to the search bar. Available options include:
        </p>

        <ul className="list-disc">
          <li className='p-2'><b>A record: </b>Stores the IPv4 address associated with a domain.</li>
          <li className='p-2'><b>AAAA record: </b>Stores the IPv6 address of the hostname.</li>
          <li className='p-2'><b>CNAME record: </b>An alias record that maps a subdomain to its main domain (e.g., www → root domain).</li>
          <li className='p-2'><b>MX record: </b>Specifies mail servers responsible for handling email for the domain along with their priority.</li>
          <li className='p-2'><b>NS record: </b>Defines the authoritative name servers for the domain.</li>
          <li className='p-2'><b>PTR record: </b>Used for reverse DNS lookup, mapping an IP address back to a domain name.</li>
          <li className='p-2'><b>SRV record: </b>Provides information about specific services like VoIP or messaging servers.</li>
          <li className='p-2'><b>SOA record: </b>Contains administrative details about the DNS zone.</li>
          <li className='p-2'><b>TXT record: </b>Used for verification and security purposes such as SPF, DKIM, and DMARC.</li>
          <li className='p-2'><b>CAA record: </b>Specifies which certificate authorities can issue SSL certificates for the domain.</li>
        </ul>
      </div>

      <h2><b>Run the DNS Propagation Test</b></h2>
      <div className='w-[85%] text-justify'>
        <p>
          After entering the details, click the “Search” button to start the test. The tool will fetch results from multiple DNS servers and display their propagation status across different locations.
        </p>

        <p>
          While reviewing the results, keep the following indicators in mind:
        </p>

        <ul className='list-disc'>
          <li className='flex gap-3 mb-2'>
            <Svgs type="tick" />
            <span>Indicates that the DNS record has successfully propagated.</span>
          </li>
          <li className='flex gap-3'>
            <Svgs type="cross" />
            <span>Indicates that the DNS record has not yet propagated.</span>
          </li>
        </ul>

        <p>
          In simple terms, a green tick means the DNS record is available on that server and matches the expected value. A cross means the record is either missing or does not match the updated value you are expecting.
        </p>

        <div className="w-[85%] mt-6 bg-white p-5 text-justify">
          <h1 className="text-lg font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-700 mb-4">
            Everything you need to understand about DNS in a simple and clear way.
          </p>

          {/* What is DNS */}
          <h2 className="font-semibold mt-4">What is the Domain Name System (DNS)?</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            The Domain Name System (DNS) is a decentralized system that translates human-readable domain names into IP addresses. It works like the internet’s phonebook, helping browsers locate the correct server when you enter a website address.
          </p>

          {/* DNS Resolution */}
          <h2 className="font-semibold mt-4">What is DNS Resolution?</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            DNS resolution is the process of converting a domain name into its corresponding IP address. This allows your device to locate and communicate with the correct server on the internet.
          </p>

          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            This process involves multiple DNS servers working together to return the correct IP address so the requested website can load properly.
          </p>

          <h3 className="font-medium mt-3">DNS Servers involved:</h3>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
            <li>
              <b>Recursive Resolver:</b> The first point of contact that receives your query and looks for the IP address, either from cache or by querying other servers.
            </li>
            <li>
              <b>Root Servers:</b> These sit at the top of the DNS hierarchy and direct requests to the correct TLD servers.
            </li>
            <li>
              <b>TLD Servers:</b> These handle domain extensions like .com, .org, etc., and point to the authoritative servers.
            </li>
            <li>
              <b>Authoritative Servers:</b> These store the actual DNS records and return the final IP address.
            </li>
          </ul>

          {/* DNS Process */}
          <h2 className="font-semibold mt-4">How does the DNS process work?</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            When you enter a URL like <b>https://xyz.com</b>, the following steps occur:
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-700">
            <li>Your browser sends a request to a DNS resolver (usually provided by your ISP).</li>
            <li>The resolver checks its cache for existing records.</li>
            <li>If not found, it queries the root DNS servers.</li>
            <li>The root servers direct it to the appropriate TLD servers.</li>
            <li>The TLD servers provide the authoritative DNS server details.</li>
            <li>The authoritative server returns the correct DNS records.</li>
            <li>The resolver caches the result and sends it back to your browser.</li>
          </ul>

          {/* DNS Propagation */}
          <h2 className="font-semibold mt-4">What is DNS Propagation?</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            DNS propagation is the time it takes for DNS changes to update across servers worldwide. This process can take up to 48 hours depending on caching and network conditions.
          </p>

          {/* Propagation Process */}
          <h2 className="font-semibold mt-4">How do DNS records propagate?</h2>
          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            When DNS records are updated, internet service providers (ISPs) gradually refresh their cached data. During this time, some users may still see the old records while others see the updated ones.
          </p>

          <p className="text-justify leading-relaxed mt-2 text-gray-700">
            This delay happens due to different cache levels across DNS servers globally. However, most updates become visible relatively quickly. You can check records like A, AAAA, CNAME, and more using a DNS lookup tool.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DnsOverview