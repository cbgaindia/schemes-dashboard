<h1 align="center">Budget Basics</h1>
<h3 align="center">Part of the <a href="https://openbudgetsindia.org/">Open Budgets India</a> Project</h3>
<br/>
<p align="center">
<img alt="Budget Basics Logo" src="https://budgetbasics.openbudgetsindia.org/api/uploads/Scheme_Dashboard_bc140eb7e1.jpg"/>
<br/>
<br/>
<a href="https://github.com/cbgaindia/budget-basic-next/blob/main/LICENSE">
<img alt="MIT License" src="https://img.shields.io/apm/l/atomic-design-ui.svg?"/>
</a>
</p>

Find downloadable data, visualisations and other useful information related to a number of schemes run by the Union and State Governments.

<br/>
<p align="center">Visit<a href="schemes.openbudgetsindia.org/"> Schemes Dashboard</a></p>

- [Features](#features)
- [Getting Started](#getting-started)
  - [Backend](#backend)
- [Guide](#guide)
  - [Directory Structure](#directory-structure)
  - [Styling](#styling)
  - [Components](#components)
  - [Utils](#utils)
- [Data Fetching](#data-fetching)
  - [Homepage Data](#homepage-data)
  - [Dynamic Routes Data](#dynamic-routes-data)
- [Run Locally](#run-locally)
- [Contributing](#contributing)

## Features

- 📱 **Responsive:** Use Desktop, Laptop or Mobile devices. It's optimized for all.
- ♿ **Accessible:** The platform is screen-reader friendly.
- 🚀 **Performant:** It's fast!
- 🌐 **JAMStack:** [Next.js](https://github.com/vercel/next.js) with Headless [Ckan](https://github.com/ckan/ckan) headless CMS to make development process fast and efficient.
- 💄 **BEM & SASS:** The platform utilizes BEM methodology with SASS to make styling efficient and maintainable.

## Getting Started

Make sure to have a recent version of Node. You'll need Node 10.13 or later.

### Backend

The platform uses Ckan DMS as the backend to fetch data from. It utlizes [Ckan API](https://docs.ckan.org/en/2.9/api/) to achieve that.

## Guide

### Directory Structure

```
scheme-dashboard/
┣ components/
┣ utils/
┣ pages/
┣ public/
┃ ┣ Images/
┃ ┣ tools/
┣ style/
┃ ┣ pages/
┃ ┣ tools/
```

### Styling

This project follows BEM Methodology with Sass Preprocessor to make styling more efficient and future maintainable. Have a look around different files to know more about it. You can learn more about styling directory [here](styles/README.md)

### Components

It is a component-based project which makes it easier to add, edit or remove features in the future.

All the components are available at `/components`. Each component has its folder with its styling file is included. This makes it easier to use that component on some other project.

### Utils

All of the functions used to fetch data from Ckan are stored at `/utils/api.js`. Learn more [here](utils/README.md)

## Data Fetching

All the heavy processing of fetching data especially `xlsx` file, converting them to object is done during build time. This gives the fastest experience for users, although it increases the build time significantly.

### Homepage Data

Fetching data for different available schemes on Ckan:

```javascript
export async function getStaticProps() {
	const data = await fetchQuery('schemeType', 'Centrally Sponsored Scheme')
	return {
		props: {
			cardsData: data.map((scheme) => ({
				slug: scheme.name,
				name: scheme.extras[0].value,
			})),
		},
		revalidate: 1,
	}
}
```

`revalidate: 1` - allows us to create or update static pages after building the site. Read
[Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration)

### Dynamic Routes Data

In our project, we have one [dynamic route](https://nextjs.org/docs/routing/dynamic-routes), `/scheme/[scheme].js`. Dynamic routes requires `getStaticPaths` to list paths during build time. [Read more](https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation).

```javascript
export async function getStaticPaths() {
	const data = await fetchQuery('schemeType', 'Centrally Sponsored Scheme')
	return {
		paths: data.map((scheme) => ({
			params: {
				scheme: scheme.name,
			},
		})),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const scheme = await dataTransform(params.scheme)
	const related = await fetchRelated(scheme.metadata.name, scheme.metadata.type)
	const news = await fetchNews(params.scheme)

	return {
		props: { scheme, related, news },
		revalidate: 1,
	}
}
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/cbgaindia/schemes-dashboard.git
```

Go to the project directory

```bash
  cd schemes-dashboard
```

Install dependencies

```bash
  npm install
```

Start the server in development

```bash
  npm run dev
```

or build and start production mode

```bash
  npm run build && npm run start
```

## Contributing

For any new feature or bug reports, please request it in [issues](https://github.com/cbgaindia/schemes-dashboard/issues).

See [CONTRIBUTING.md](https://github.com/cbgaindia/schemes-dashboard/blob/main/CONTRIBUTING.md) for ways to get started.

Please adhere to [Code of Conduct](https://github.com/cbgaindia/schemes-dashboard/blob/main/CODE_OF_CONDUCT.md).
