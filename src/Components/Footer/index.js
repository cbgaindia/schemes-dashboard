import React from "react"
import { ReactComponent as FacebookIcon } from "../../Images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../Images/twitter-icon.svg";
import { ReactComponent as GithubIcon } from "../../Images/github-icon.svg";

import "./index.css"

const dashboardLinks = {
    union: [
        { title: "Union Budget Explorer 2021-22", link: "https://union.openbudgetsindia.org/en/" },
        { title: "Union Budget Explorer 2020-21", link: "https://union2020.openbudgetsindia.org/en/" },
        { title: "Union Budget Explorer 2019-20", link: "https://union2019.openbudgetsindia.org/en/" },
        { title: "Union Budget Explorer 2019-20 (I)", link: "https://union2019i.openbudgetsindia.org/en/" },
        { title: "Union Budget Explorer 2018-19", link: "https://union2018.openbudgetsindia.org/en/" }
    ],
    state: [
        { title: "Assam Budget Explorer 2020-21", link: "https://assam2020.openbudgetsindia.org/en/" },
        { title: "Assam Budget Explorer 2019-20", link: "https://assam2019.openbudgetsindia.org/en/" }
    ],
    district: [
        { title: "Balasore District Treasury", link: "https://dash.openbudgetsindia.org/superset/dashboard/odisha_balasore_treasury_dashboard/?standalone=true" },
        { title: "Krishna District Treasury", link: "https://dash.openbudgetsindia.org/superset/dashboard/ap_krishna_treasury_dashboard/?standalone=true" }
    ],
    schemes: [
        { title: "Schemes Dashboard", link: "https://schemes.openbudgetsindia.org/" },
    ],
    story: [
        { title: "Story Generator", link: "https://cbgaindia.github.io/story-generator/" }
    ]
}

const budgetDatasets = [
    { title: "Government-wise Budget Data", link: "https://openbudgetsindia.org/organization" },
    { title: "Sector-wise Budget Data", link: "https://openbudgetsindia.org/group" },
    { title: "All Datasets", link: "https://openbudgetsindia.org/dataset" },
]

const platformLinks = [
    { title: "How to use the OBI Platform", link: "https://openbudgetsindia.org/pages/how-to-use-the-portal" },
    { title: "FAQs on the Platform", link: "https://openbudgetsindia.org/pages/faqs" },
    { title: "About OBI Platform", link: "https://openbudgetsindia.org/about" },
    { title: "Video: OBI Platform", link: "https://youtu.be/xKjzH1ZB3c4" },
    { title: "Video: Budget Basics", link: "https://youtu.be/fGxNh5Xfn2I" },
]

const attributionLinks = [
    { title: "Disclaimer", link: "https://openbudgetsindia.org/pages/disclaimers", class: "" },
    { title: "License", link: "https://openbudgetsindia.org/pages/license", class: "ml-24" },
    { title: "Contact Us", link: "https://openbudgetsindia.org/contact", class: "ml-24" },
    { title: "CKAN API", link: "https://docs.ckan.org/en/latest/api/", class: "ml-24" },
]

const socialMediaLinks = [
    { link: "https://github.com/cbgaindia", class: "link", child: <GithubIcon fill="white" />, },
    { link: "https://twitter.com/OpenBudgetsIn", class: "link ml-24", child: <TwitterIcon fill="white" />, },
    { link: "https://www.facebook.com/OpenBudgetsIndia", class: "link ml-24", child: <FacebookIcon fill="white" />, },
]

const Footer = () => {
    return (
        <footer class="site-footer">
            <div class="footer-links-container">
                <div class="site-logo">
                    <a href="https://openbudgetsindia.org/en/" target="_blank"><span class="logo-link-container"></span></a>
                </div>

                <div class="footer-links">
                    <div class="links-container">
                        <h4>Dashboards</h4>
                        <div class="links dashboard-links">
                            <h4>Union Dashboards</h4>
                            {
                                dashboardLinks.union.map(dashboard =>
                                    (<a href={dashboard.link} target="_blank">{dashboard.title}</a>)
                                )
                            }
                            <h4>State Dashboards</h4>
                            {
                                dashboardLinks.state.map(dashboard =>
                                    (<a href={dashboard.link} target="_blank">{dashboard.title}</a>)
                                )
                            }
                            <h4>District Dashboards</h4>
                            {
                                dashboardLinks.district.map(dashboard =>
                                    (<a href={dashboard.link} target="_blank">{dashboard.title}</a>)
                                )
                            }
                            <h4>Schemes Dashboard</h4>
                            {
                                dashboardLinks.schemes.map(dashboard =>
                                    (<a href={dashboard.link} target="_blank">{dashboard.title}</a>)
                                )
                            }
                            <h4>Story Generator</h4>
                            {
                                dashboardLinks.story.map(dashboard =>
                                    (<a href={dashboard.link} target="_blank">{dashboard.title}</a>)
                                )
                            }
                        </div>
                    </div>
                    <div class="links-container ml-32">
                        <h4>Budget Datasets</h4>
                        <div class="links dataset-links">
                            {
                                budgetDatasets.map(dataset =>
                                    (<a href={dataset.link} target="_blank">{dataset.title}</a>)
                                )
                            }
                        </div>
                    </div>
                    <div class="links-container ml-32">
                        <h4>OBI Platform</h4>
                        <div class="links platform-links">
                            {
                                platformLinks.map(link =>
                                    (<a href={link.link} target="_blank">{link.title}</a>)
                                )
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div class="attribution-container">
                <div class="attribution-content">
                    <div class="links-container">
                        {
                            attributionLinks.map(link =>
                                (<a className={link.class} href={link.link} target="_blank">{link.title}</a>)
                            )
                        }
                    </div>
                    <div class="logos-container">
                        <div class="attribution-logos">
                            <div class="logo cc">
                                <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"><span class="card-link-container"></span></a>
                            </div>
                            <div class="logo oss ml-24">
                                <a href="https://opendefinition.org/od/2.1/en/" target="_blank"><span class="card-link-container"></span></a>
                            </div>
                        </div>
                        <div class="social-media-links">
                            {
                                socialMediaLinks.map(link =>
                                    (<a className={link.class} href={link.link} target="_blank">{link.child}</a>)
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;