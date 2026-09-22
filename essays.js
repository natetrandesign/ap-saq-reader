/* LEQ and DBQ bank.
   Released prompts are the 2026 AP World History: Modern free-response questions
   published on AP Central. Released DBQ cards use the content summaries from the
   2026 scoring guidelines, not a retyped image PDF.
   Practice prompts and practice documents are original. They follow the 2026
   task shape and are not College Board questions. */
const ESSAY_BANK = {
  leq: [
    {
      id: '2026-leq-2',
      released: true,
      year: 2026,
      label: '2026 LEQ 2 · Military conflicts and state building',
      skill: 'Causation',
      period: 'c. 1200–1600',
      units: 'Units 1–3',
      strayer: 'Ways of the World, 5e, chapters 2–4',
      prompt: 'In the period circa 1200 to 1600, technological innovations, migrations of people, and the expansion and contraction of religions intensified military conflicts and resulted in numerous wars of conquest. Develop an argument that evaluates the extent to which military conflicts affected state building in Afro-Eurasia during the period 1200 to 1600.',
      hints: [
        'A line of reasoning needs a reason or categories, such as destruction of older states and creation of new ones.',
        'Two specific examples that merely name empires earn the first evidence point. The second point requires those examples to support the claim.',
        'Illustrative evidence readers have accepted includes Ottoman devshirme and Janissaries, Safavid use of gunpowder to enforce Shi’a rule, Mongol conquest and administration, and Mughal reliance on Rajput elites. The list is not exhaustive.'
      ]
    },
    {
      id: '2026-leq-3',
      released: true,
      year: 2026,
      label: '2026 LEQ 3 · Migration and social or cultural change',
      skill: 'Causation',
      period: 'c. 1600–1900',
      units: 'Units 4–6',
      strayer: 'Ways of the World, 5e, chapters 4 and 6–10',
      prompt: 'In the period circa 1600 to 1900, demographic, economic, and political factors led to large scale migrations of people both within and across states, regions, and continents, including voluntary and involuntary migration flows. Develop an argument that evaluates the extent to which migration of people in the period circa 1600 to 1900 led to social and/or cultural change.',
      hints: [
        'Stay inside 1600–1900. The prompt already tells you migration happened, so the argument has to evaluate the extent of social or cultural change.',
        'Specific evidence can include the Atlantic slave trade and African diaspora religions, indentured Indian and Chinese labor after slavery’s decline, settler colonies, and ethnic enclaves. Accept any other specific, in-period example that supports an argument.'
      ]
    },
    {
      id: '2026-leq-4',
      released: true,
      year: 2026,
      label: '2026 LEQ 4 · Peace efforts in the twentieth century',
      skill: 'Causation',
      period: 'c. 1900–present',
      units: 'Units 7–9',
      strayer: 'Ways of the World, 5e, chapters 11–13',
      prompt: 'During the twentieth century, individuals, groups, and states organized anti-war movements, created international organizations, and adopted peacemaking policies, in order to further peace and avoid future conflicts. Develop an argument that evaluates the extent to which efforts to promote peace and/or avoid international conflict during the twentieth century were successful.',
      hints: [
        '“Evaluate the extent” wants a limit as well as a success, or a success as well as a limit. A list of treaties is not yet an argument.',
        'Possible evidence includes the League of Nations and its failure to stop aggression in the 1930s, the United Nations, nuclear deterrence, nonalignment, and anti-war movements. Accept other specific twentieth-century evidence.'
      ]
    },
    {
      id: '2025-leq-2',
      released: true,
      year: 2025,
      label: '2025 LEQ 2 · Belief systems in Asia',
      skill: 'Causation',
      period: 'c. 1200–1450',
      units: 'Units 1–2',
      strayer: 'Ways of the World, 5e, chapters 2–3',
      prompt: 'In the period circa 1200 to 1450, Buddhism, Hinduism, and Confucianism included ideas about social structures, gender roles, and political authority that influenced societies across Asia. Develop an argument that evaluates the extent to which one or more of these belief systems shaped societies and/or political systems in Asia during this period.',
      hints: [
        'A thesis needs a reason or categories. “Belief systems shaped Asia” restates the prompt. Readers have accepted a claim that rulers used these traditions to legitimize rule, or that Confucianism both strengthened the state and justified rebellion under the Mandate of Heaven.',
        'The scoring notes treat Song bureaucracy, Khmer use of Hinduism or Buddhism, and patriarchy supported by Confucianism as illustrative, not exhaustive. Islam’s spread is a real development, but it does not answer this prompt unless it is tied to the belief systems the question names.'
      ]
    },
    {
      id: '2025-leq-3',
      released: true,
      year: 2025,
      label: '2025 LEQ 3 · Economic rivalries and empire',
      skill: 'Causation',
      period: 'c. 1450–1750',
      units: 'Units 3–4',
      strayer: 'Ways of the World, 5e, chapters 4–6',
      prompt: 'In the period circa 1450 to 1750, economic, political, and religious rivalries led many imperial states around the world to expand their territories and influence. Develop an argument that evaluates the extent to which economic rivalries were the primary motivation for the expansion of European empires during this period.',
      hints: [
        '“Evaluate the extent” and “primary” both ask you to weigh economic motives against political and religious ones. A list of explorers is not a line of reasoning.',
        'Stay with European empires in 1450–1750. Spice-trade competition, the Portuguese and Dutch in the Indian Ocean, and missionary aims in the Americas are in range. A claim that only one motive existed usually drops the complexity point.'
      ]
    },
    {
      id: '2025-leq-4',
      released: true,
      year: 2025,
      label: '2025 LEQ 4 · Medical and scientific discoveries',
      skill: 'Causation',
      period: 'Twentieth century',
      units: 'Units 7–9',
      strayer: 'Ways of the World, 5e, chapters 11–14',
      prompt: 'During the twentieth century, medical and scientific discoveries affected life expectancies, access to resources, and social and economic structures, which reshaped individual lives as well as entire societies. Develop an argument that evaluates the extent to which medical and scientific discoveries benefited individuals and/or societies during this period.',
      hints: [
        'A minimally acceptable thesis still needs a reason, such as antibiotics lowering mortality and lengthening life. “Discoveries benefited people” restates the prompt.',
        'Benefit is only half of an extent argument. A strong essay also names a limit: unequal access, new weapons, or environmental harm, with a specific twentieth-century example.'
      ]
    },
    {
      id: '2024-leq-2',
      released: true,
      year: 2024,
      label: '2024 LEQ 2 · Exchange networks and cultural change',
      skill: 'Causation',
      period: 'c. 1200–1750',
      units: 'Units 2–4',
      strayer: 'Ways of the World, 5e, chapters 3–6',
      prompt: 'In the period circa 1200–1750 networks of exchange led to the spread of religions, cultures, ideas, and traditions in many parts of Afro-Eurasia. Develop an argument that evaluates the extent to which exchange networks contributed to social or cultural change in Afro-Eurasia during this period.',
      hints: [
        'The period is long. Pick examples you can actually place, such as Muslim merchant diasporas, Sufis along trade routes, or the spread of Buddhism through Southeast Asian ports.',
        'Name the network and the change. “Trade spread culture” is a restatement. Two specific cases that support an argument about extent can earn both evidence points.'
      ]
    },
    {
      id: '2024-leq-3',
      released: true,
      year: 2024,
      label: '2024 LEQ 3 · Industrialization and change',
      skill: 'Causation',
      period: 'c. 1750–1900',
      units: 'Units 5–6',
      strayer: 'Ways of the World, 5e, chapters 7–10',
      prompt: 'In the period circa 1750–1900, societies across the globe were affected by new technologies that transformed methods of production. Develop an argument that evaluates the extent to which the growth of industrialization led to economic or social change during this period.',
      hints: [
        'Readers have accepted a line of reasoning that factory production changed employment, family structure, and the move from rural communities to cities, or that it raised living standards for some and worsened conditions for mill workers.',
        'Unsafe mills, child labor, unions, and middle-class reform are illustrative. A second region, not only Britain, makes the extent claim stronger.'
      ]
    },
    {
      id: '2024-leq-3-set2',
      released: true,
      year: 2024,
      label: '2024 LEQ 3 · Set 2 · New political ideologies',
      skill: 'Causation',
      period: 'c. 1750–1900',
      units: 'Units 5–6',
      strayer: 'Ways of the World, 5e, chapters 7–10',
      prompt: 'In the period circa 1750–1900, discontent with monarchist and imperial rule spread around many parts of the world and led to significant political changes. Develop an argument that evaluates the extent to which discontent with monarchist or imperial rule was the main source of new political ideologies or systems of government during this period.',
      hints: [
        '“Main source” is an extent claim. Enlightenment ideas, the Atlantic revolutions, and later nationalism can support it, but a 6 usually also shows another source, such as industrial class conflict.',
        'Stay inside 1750–1900. A specific revolution or constitution beats the phrase “people wanted freedom.”'
      ]
    },
    {
      id: 'practice-leq-compare',
      released: false,
      year: null,
      label: 'Practice LEQ · Legitimizing land empires',
      skill: 'Comparison',
      period: 'c. 1450–1750',
      units: 'Unit 3',
      strayer: 'Ways of the World, 5e, chapters 4–5',
      prompt: 'In the period circa 1450 to 1750, rulers of land-based empires used religion, art, and bureaucratic elites to legitimize their authority. Develop an argument that evaluates the extent to which two land-based empires used similar methods to legitimize rule in the period 1450 to 1750.',
      hints: [
        'Comparison still needs a line of reasoning: similar in one method, different in another, or similar methods used for different religious claims.',
        'Name the empires. Ottoman, Safavid, Mughal, Qing, and Tokugawa Japan are all inside the period. Song China is not.'
      ]
    },
    {
      id: 'practice-leq-ccot',
      released: false,
      year: null,
      label: 'Practice LEQ · Indian Ocean trade',
      skill: 'Continuity and change',
      period: 'c. 1200–1450',
      units: 'Unit 2',
      strayer: 'Ways of the World, 5e, chapter 3',
      prompt: 'In the period circa 1200 to 1450, merchants, missionaries, and diasporic communities linked the societies of the Indian Ocean. Develop an argument that evaluates the extent to which Indian Ocean trade changed between 1200 and 1450.',
      hints: [
        'Continuity and change over time needs both, or a clear argument that one dominated. Zheng He’s voyages and the continued role of monsoon routes and Muslim merchant diasporas are in range.',
        'The Portuguese arrival after 1498 is outside this prompt.'
      ]
    }
  ],
  dbq: [
    {
      id: '2026-dbq',
      released: true,
      year: 2026,
      label: '2026 DBQ · Women and military conflicts',
      period: 'Twentieth century',
      units: 'Units 7–8',
      strayer: 'Ways of the World, 5e, chapters 11–13',
      prompt: 'Evaluate the extent to which military conflicts in the twentieth century changed the role of women in society.',
      sourceNote: 'Prompt from the 2026 AP World History: Modern exam. Each card is the document’s real attribution plus the content summary published in the 2026 scoring guidelines. The image in Document 4 is described rather than shown.',
      pdf: 'https://apcentral.collegeboard.org/media/pdf/ap26-frq-world-history-modern.pdf',
      docs: [
        {
          n: 1,
          kind: 'released',
          attribution: 'Yuan Luanyu, Chinese villager, interview on the 1899–1901 Boxer Rebellion, published 1960',
          text: 'Describes the leadership of “Miss Han,” a local woman during the Boxer Rebellion. The speaker attributes supernatural powers and fighting skill to her and says she led about 4,000 to 5,000 male rebels. He later heard that her father and brothers killed her for the disobedience of leaving the household.'
        },
        {
          n: 2,
          kind: 'released',
          attribution: 'Lady Frances Balfour, British women’s rights activist, essay on Indian women’s contributions to the British war effort in the First World War, 1915',
          text: 'Describes initiatives by the “women of India” in support of the British home front: sewing shirts, sending money and provisions, contributing cash to the British War Fund, and selling jewelry to raise those funds.'
        },
        {
          n: 3,
          kind: 'released',
          attribution: 'Strike committee of women workers at a Russian textile factory, proclamation to Russian soldiers, 1915',
          text: 'Appeals to Russian soldiers to protect women workers who have gone on strike. Describes the danger of being shot by factory guards and the lack of bread that drove the strike. Portrays the women as defenseless because their male relatives are at the front.'
        },
        {
          n: 4,
          kind: 'released',
          attribution: '“The Parisian Woman Worker—Before the War / During the War,” cover illustration in the French newspaper Le Petit Journal, 1916',
          text: 'Image. The same woman is shown twice: before the war, in an elegant dress, arranging flowers in a shop; during the war, in a simple dress and headscarf, operating a heavy machine that makes gun cartridges in a factory full of women workers.'
        },
        {
          n: 5,
          kind: 'released',
          attribution: 'Margarita Robles de Mendoza, Mexican women’s rights activist, The Evolution of the Mexican Woman, 1931',
          text: 'Argues that the goals of feminism are compatible with expectations that women be good wives and mothers. Uses the soldaderas of the Mexican Revolution, women who sustained and supported male partners in battle, to claim that equality will not make women abandon those roles.'
        },
        {
          n: 6,
          kind: 'released',
          attribution: 'Muthoni Kirima, Kenyan woman, interview about the 1952–1960 Mau Mau uprising, published 2019',
          text: 'Describes joining the Mau Mau rebellion with her husband after witnessing British colonial oppression. Recalls early debates among Kenyan men about how far women should take part, then says those debates were temporary and that women “made us win this war” through fighting and auxiliary work.'
        },
        {
          n: 7,
          kind: 'released',
          attribution: 'Anonymous Soviet woman, interview about the 1979–1989 Soviet invasion of Afghanistan, published 1990',
          text: 'Recalls serving as a military hospital nurse in Afghanistan in the 1980s and then trying to reintegrate into Soviet society. Describes treating badly injured soldiers, the physical and psychological toll of the war, and the sense that veterans were undervalued and misunderstood.'
        }
      ]
    },
    {
      id: 'practice-dbq-atlantic',
      released: false,
      year: null,
      label: 'Practice DBQ · The Atlantic slave trade',
      period: 'c. 1500–1800',
      units: 'Unit 4',
      strayer: 'Ways of the World, 5e, chapter 6',
      prompt: 'Evaluate the extent to which the Atlantic slave trade transformed societies in West Africa and the Americas between circa 1500 and 1800.',
      sourceNote: 'Practice question, not a College Board DBQ. Document 1 is a short public-domain excerpt from Olaudah Equiano’s 1789 narrative. Documents 2–7 were written for this exercise. They are historically plausible and are not real sources.',
      docs: [
        {
          n: 1,
          kind: 'public-domain',
          attribution: 'Olaudah Equiano, The Interesting Narrative of the Life of Olaudah Equiano, 1789. Public-domain text, excerpted.',
          text: 'The stench of the hold while we were on the coast was so intolerably loathsome, that it was dangerous to remain there for any time, and some of us had been permitted to stay on the deck for the fresh air; but now that the whole ship’s cargo were confined together, it became absolutely pestilential. The closeness of the place, and the heat of the climate, added to the number in the ship, which was so crowded that each had scarcely room to turn himself, almost suffocated us.'
        },
        {
          n: 2,
          kind: 'practice',
          attribution: 'Practice document. A Kongo court secretary to a Portuguese factor, 1526. Written for this exercise, not a historical source.',
          text: 'Your ships ask for more captives each season, and the men who bring them are no longer only our old enemies. Chiefs along the river now raid their own dependents to meet your price in cloth and wine. The roads to the coast are full, and the fields those people once farmed are empty.'
        },
        {
          n: 3,
          kind: 'practice',
          attribution: 'Practice document. A Portuguese shipmaster’s trading notes, Luanda, 1648. Written for this exercise, not a historical source.',
          text: 'We paid in Brazilian tobacco and Indian cotton. The captives offered this month were mostly men of fighting age. Women and children were held back by the soba unless the cloth was doubled. Three canoes of captives died before loading, and the factor still demanded the agreed number.'
        },
        {
          n: 4,
          kind: 'practice',
          attribution: 'Practice document. A Jesuit observer on a Brazilian sugar estate, 1633. Written for this exercise, not a historical source.',
          text: 'The mill does not stop in the grinding season. The newly arrived are put to the cane because the ones purchased last year are already few. The owner says a field without new people from Africa cannot make sugar, and he counts his wealth in those purchases rather than in the land alone.'
        },
        {
          n: 5,
          kind: 'practice',
          attribution: 'Practice document. An Oyo cavalry officer’s recollection, recorded for a visiting merchant, c. 1720. Written for this exercise, not a historical source.',
          text: 'Horses from the north win our wars, and captives pay for the horses. We do not sell every prisoner. Smiths, leatherworkers, and some women remain in Oyo. The rest go south to the coast, and the guns that come back make the next campaign shorter.'
        },
        {
          n: 6,
          kind: 'practice',
          attribution: 'Practice document. Inventory of a Virginia tobacco planter, 1724. Written for this exercise, not a historical source.',
          text: 'Listed: forty-two working people, six of them children born here; two families who speak a language the overseer does not know; tools for tobacco; a fine for a neighbor who bought a person the court later ruled had been imported against the colony’s duty. The planter notes that creole children are cheaper than new arrivals and less likely to run toward a swamp they do not know.'
        },
        {
          n: 7,
          kind: 'practice',
          attribution: 'Practice document. A Benin palace order copied by a Dutch trader, c. 1700. Written for this exercise, not a historical source.',
          text: 'The oba forbids the sale of men born in Benin. Traders may buy captives taken in war outside the city, and they may buy cloth and pepper as before. Any factor who takes a Benin man from the market will lose his goods. The palace does not forbid the trade. It chooses who may be sold.'
        }
      ]
    },
    {
      id: 'practice-dbq-mongol',
      released: false,
      year: null,
      label: 'Practice DBQ · Mongol rule and Eurasian connections',
      period: 'c. 1200–1400',
      units: 'Unit 2',
      strayer: 'Ways of the World, 5e, chapter 3',
      prompt: 'Evaluate the extent to which Mongol rule increased connections across Eurasia in the period circa 1200 to 1400.',
      sourceNote: 'Practice question, not a College Board DBQ. All seven documents were written for this exercise. They are historically plausible and are not real sources.',
      docs: [
        {
          n: 1,
          kind: 'practice',
          attribution: 'Practice document. A Persian clerk of the Ilkhan court, Tabriz, c. 1295. Written for this exercise, not a historical source.',
          text: 'The riders of the yam change horses at stations a day’s ride apart, and a letter from the khan reaches the edge of his lands before a merchant caravan has left the city. We who keep the accounts see more foreign silver and more foreign physicians than our fathers did. We also see the orders that move grain to the camps before it reaches the villages.'
        },
        {
          n: 2,
          kind: 'practice',
          attribution: 'Practice document. A chronicle from Vladimir, c. 1260. Written for this exercise, not a historical source.',
          text: 'The princes go to the horde to receive the patent to rule, and they collect the tribute the baskaks demand. Novgorod still trades, but the chronicler writes that the city buys its peace. The churches stand. The decision of who is grand prince does not.'
        },
        {
          n: 3,
          kind: 'practice',
          attribution: 'Practice document. A Chinese artisan relocated to Karakorum, recollection set down later in Dadu, c. 1280. Written for this exercise, not a historical source.',
          text: 'They took the weavers and the metalworkers north when the city fell. In the new capital I work beside a man from Samarkand and another from the western mountains. We are fed. We are not free to go home. The cloth we make is worn by people who cannot pronounce the names of our towns.'
        },
        {
          n: 4,
          kind: 'practice',
          attribution: 'Practice document. A Latin Christian friar’s report of a debate at a Mongol court, c. 1254. Written for this exercise, not a historical source.',
          text: 'The khan let the Buddhists, the Muslims, and the Christians each speak, and he asked which law made a man live well. He did not choose. He said his empire held many peoples and that the sky had given him the earth to tax, not a single altar to impose. I was fed lamb and told to return with an answer from my pope.'
        },
        {
          n: 5,
          kind: 'practice',
          attribution: 'Practice document. A merchant of the ortogh partnership, letter from a Silk Road town, c. 1320. Written for this exercise, not a historical source.',
          text: 'Under the khan’s peace a partnership can send silver east and silk west with one set of passes. The tolls are heavy and regular, which is better than the tolls that used to be unpredictable. Since the death of the last great khan the passes are honored in one ulus and ignored in the next. I have split the shipment.'
        },
        {
          n: 6,
          kind: 'practice',
          attribution: 'Practice document. A Cairene physician’s note on a new pestilence, 1348. Written for this exercise, not a historical source.',
          text: 'The sickness came with the ships and the caravans, not with a local wind. Families who had not left the quarter died after burying travelers from the port. The same fever is reported from cities that share no governor and no language, only the roads the soldiers and the merchants kept open.'
        },
        {
          n: 7,
          kind: 'practice',
          attribution: 'Practice document. A scholar in a former Jin city, essay after its capture, c. 1234. Written for this exercise, not a historical source.',
          text: 'They say the riders join the world together. What I saw was the ditch filled with the people of this city, the libraries burned to boil meat, and the fields untilled for two seasons. Connection, if that is the word, began with the absence of those who used to carry the trade.'
        }
      ]
    }
  ]
};
