import React from 'react'

function Description() {
    return (
        <div className="w-[850px] mb-2 bg-white p-4 rounded rounded-base shadow-lg">
            <span className="text-lg font-bold text-heading align-top">Check Your DNS Propogation</span> <br />
            <span className="">
                Monitor how your domain resolves across the globe with real-time DNS insights. Whether you're updating records, migrating servers, or launching a new website, our DNS checker helps you instantly verify how changes are reflected across multiple DNS resolvers worldwide.
                <br />
                Get a clear view of propagation status by querying different regions and providers, ensuring your domain is correctly configured and accessible everywhere. Quickly detect inconsistencies, delays, or errors in DNS resolution and stay confident that your updates are live and working as expected.
            </span>
        </div>
    )
}

export default Description