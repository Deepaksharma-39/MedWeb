import { Helmet, HelmetProvider } from "react-helmet-async";

const SEO = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>
                    {"Flone"} | {"Product Page"}
                </title>
                <meta name="description" content={"Product page of flone react minimalist eCommerce template."} />
            </Helmet>
        </HelmetProvider>
    );
};


export default SEO;