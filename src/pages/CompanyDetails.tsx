import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const companyDetails: Record<string, {
  name: string;
  title: string;
  content: string;
}> = {
  'rosneft': {
    name: 'Rosneft',
    title: 'Rosneft: Russia\'s Leading Oil & Gas Giant',
    content: `# Rosneft: Russia's Leading Oil & Gas Giant

## Introduction
Rosneft is Russia's largest oil and gas company and one of the most influential players in the global energy market. With extensive operations in exploration, production, refining, and distribution, Rosneft plays a crucial role in Russia's economy and the global oil industry.

## History and Growth
Founded in **1993**, Rosneft emerged as a state-owned enterprise following the breakup of the Soviet Union. The company expanded significantly in the early 2000s, acquiring major assets from bankrupt oil firms like Yukos. Today, Rosneft is among the world's largest publicly traded oil companies by revenue and reserves.

## Business Operations
Rosneft operates in multiple energy sectors:

1. **Exploration & Production:** Rosneft controls some of the world's largest oil and gas reserves, with major projects in Russia, the Arctic, and international locations.
2. **Refining & Petrochemicals:** The company owns and operates refineries in Russia and abroad, producing petroleum products and chemicals.
3. **Global Partnerships:** Rosneft collaborates with international energy giants such as BP and Chinese firms to expand its reach.
4. **Gas & LNG Production:** The company is expanding its liquefied natural gas (LNG) projects to increase exports to Europe and Asia.

## Challenges and Controversies
Despite its global presence, Rosneft faces several challenges:

- **Sanctions & Geopolitical Risks:** Western sanctions have restricted its access to financing and technology.
- **Environmental Concerns:** Arctic drilling and oil spills have raised questions about Rosneft's sustainability efforts.
- **Market Volatility:** Fluctuations in global oil prices impact its revenue and expansion plans.
- **Regulatory Issues:** The company operates under tight state control, which affects its strategic flexibility.

## Future Outlook
Rosneft is focused on maintaining its global dominance while adapting to industry changes:

- **Energy Diversification:** Investing in natural gas, hydrogen, and carbon capture technologies.
- **Asian Market Expansion:** Strengthening trade relations with China and India to offset Western restrictions.
- **Technological Innovation:** Developing advanced drilling and refining techniques to improve efficiency.
- **Sustainability Initiatives:** Working toward reducing carbon emissions and increasing environmental protection efforts.

## Conclusion
Rosneft remains a powerhouse in the global energy market despite geopolitical and environmental challenges. As the industry shifts towards cleaner energy, its ability to innovate and adapt will determine its long-term success.`
  },
  'lukoil': {
    name: 'Lukoil',
    title: 'Lukoil: Russia\'s Leading Private Oil & Gas Company',
    content: `# Lukoil: Russia's Leading Private Oil & Gas Company

## Introduction
Lukoil is one of the largest privately-owned oil and gas companies in Russia and a major player in the global energy market. With vast upstream and downstream operations, Lukoil has established itself as a competitive force in the petroleum industry.

## History and Growth
Founded in **1991**, Lukoil was formed through the merger of several state-owned enterprises during Russia's transition to a market economy. Over the years, it expanded rapidly by acquiring refineries and oil fields domestically and internationally. Today, Lukoil operates in over **30 countries**, making it one of the world's leading energy firms.

## Business Operations
Lukoil's business model spans multiple energy segments:

1. **Exploration & Production:** The company has significant oil and gas reserves in Russia, the Middle East, and Africa.
2. **Refining & Petrochemicals:** Lukoil owns and operates refineries in Russia and Europe, producing fuel and petrochemical products.
3. **Retail & Distribution:** It operates a vast network of gas stations across Russia, Europe, and the U.S.
4. **Renewable Energy Investments:** The company is gradually investing in solar, wind, and biofuel projects.

## Challenges and Controversies
Like other major oil companies, Lukoil faces several obstacles:

- **Geopolitical Risks:** Sanctions imposed by Western nations limit its international operations.
- **Oil Price Volatility:** Fluctuations in crude oil prices affect profitability.
- **Environmental Concerns:** The company has been criticized for its oil spill incidents and environmental policies.
- **Competition & Regulation:** Operating as a private entity in Russia, Lukoil must navigate government regulations and competition with state-owned giants like Rosneft.

## Future Outlook
Lukoil is adapting to industry changes by:

- **Diversifying Energy Sources:** Increasing investments in gas, renewables, and clean energy technologies.
- **Expanding Internationally:** Strengthening ties with Middle Eastern and Asian markets.
- **Enhancing Technological Innovations:** Improving efficiency in drilling, refining, and alternative energy solutions.
- **Sustainability Goals:** Working on reducing emissions and increasing environmental responsibility initiatives.

## Conclusion
Lukoil remains a major force in the oil and gas industry, leveraging its private ownership structure to remain flexible and competitive. Despite economic and political challenges, its focus on innovation and energy diversification will determine its long-term success in the evolving global energy landscape.`
  },
  'pemex': {
    name: 'Pemex',
    title: 'Pemex: Mexico\'s Oil Powerhouse',
    content: `# Pemex: Mexico's Oil Powerhouse

## Introduction
Petróleos Mexicanos, commonly known as **Pemex**, is Mexico's state-owned oil company and one of the largest energy corporations in Latin America. Established to manage the country's vast oil resources, Pemex has played a crucial role in Mexico's economy for decades. However, financial struggles, corruption scandals, and declining production have challenged its dominance in recent years.

## History and Growth
Pemex was founded in **1938** following the nationalization of Mexico's oil industry. This move, led by President Lázaro Cárdenas, marked a significant moment in the country's economic independence, as it took control of oil resources previously managed by foreign companies.

For much of the **20th century**, Pemex was a symbol of national pride and economic strength. It became one of the largest oil producers in the world, generating significant revenue for the Mexican government. However, as oil reserves matured and operational inefficiencies grew, the company began facing financial and structural challenges.

## Business Operations
Pemex operates across various sectors of the energy industry:

1. **Exploration & Production:** Pemex manages Mexico's crude oil and natural gas fields, with major operations in the Gulf of Mexico.
2. **Refining & Petrochemicals:** The company owns and operates refineries, though many struggle with inefficiency and outdated infrastructure.
3. **Distribution & Retail:** Pemex fuel stations dominate Mexico's market, although competition has increased due to energy sector reforms.

## Challenges and Controversies
Despite its historical success, Pemex has faced significant challenges:

- **Financial Debt:** Pemex is one of the world's most indebted oil companies, with over **$100 billion** in liabilities.
- **Declining Oil Production:** Aging fields and a lack of investment in exploration have led to reduced output.
- **Corruption and Mismanagement:** Pemex has been at the center of multiple corruption scandals, damaging its reputation and financial stability.
- **Energy Reforms:** The Mexican government opened the energy sector to private investment in **2013**, reducing Pemex's monopoly and increasing competition.

## Future Outlook
Pemex is at a crossroads, with efforts underway to stabilize and modernize the company:

- **Government Support:** The current administration continues to inject funds into Pemex to support its recovery.
- **Refinery Upgrades:** Investments in refinery infrastructure aim to reduce dependence on fuel imports.
- **Renewable Energy and Sustainability:** Pemex is slowly exploring renewable energy options, but progress remains limited.

## Conclusion
Pemex remains a key player in Mexico's energy landscape but faces significant hurdles in maintaining its dominance. With government backing and strategic reforms, the company hopes to overcome financial and operational challenges. However, adapting to the global energy transition will be crucial for Pemex's long-term survival and competitiveness in the evolving oil and gas industry.`
  }
};

function CompanyDetails() {
  const { id } = useParams();
  const company = companyDetails[id || ''];

  if (!company) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-[#101820] mb-8">Company Not Found</h1>
            <Link 
              to="/trusted-seller" 
              className="inline-flex items-center text-[#FEE715] hover:text-[#101820]"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Trusted Sellers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#101820]">
      <PageHeader 
        title={company.title}
        subtitle="Detailed company information and analysis"
      />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/trusted-seller"
              className="inline-flex items-center text-[#FEE715] hover:text-[#101820] mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Trusted Sellers
            </Link>

            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ 
                __html: company.content.split('\n').map(line => {
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-4xl font-bold text-[#101820] mb-8">${line.replace('# ', '')}</h1>`;
                  }
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-3xl font-bold text-[#101820] mb-6 mt-12">${line.replace('## ', '')}</h2>`;
                  }
                  return line;
                }).join('\n')
              }} />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyDetails;