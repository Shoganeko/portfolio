import React from "react"
import { DefaultSeo } from "next-seo";

const Seo = <DefaultSeo
    title="AJ Kneisl"
    description="Kotlin & React Developer"
    canonical="https://www.ajkneisl.dev"
    openGraph={{
        url: "https://www.ajkneisl.dev",
        images: [
            {
                alt: "Logo",
                url: "https://ajkneisl.dev/icon.jpg"
            }
        ],
        locale: "en_NA",
        title: "AJ Kneisl",
        description: "Kotlin & React Developer"
    }}
    twitter={{
        handle: "@aj_kneisl",
        cardType: 'summary_large_image'
    }}
/>

export default Seo