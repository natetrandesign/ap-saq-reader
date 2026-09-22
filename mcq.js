/* Original multiple-choice drills for AP World History: Modern.
   Scoped to the chapters of Strayer and Nelson, Ways of the World for the AP
   World History Modern Course, 5th edition. No textbook passage and no
   secure College Board multiple-choice item is reproduced. Stimulus passages
   were written for this app. */
const MCQ_UNITS = [
  {
    id: 1,
    name: 'The Global Tapestry',
    years: 'c. 1200–1450',
    strayer: 'Chapter 2, with religious background from chapter 1',
    blurb: 'Song China, Dar al-Islam, South and Southeast Asia, Mali and the Swahili coast, Aztec and Inca states, and fragmented Europe.',
    questions: [
      {
        skill: 'Causation',
        stem: 'Song China’s expansion of the civil service examinations is best understood as an effort to',
        choices: [
          'replace Confucian learning with a Buddhist administration',
          'staff the government with officials whose careers depended on the throne rather than on inherited aristocratic office',
          'end merchant influence by banning long-distance trade',
          'copy the Mongol kuriltai after the conquest of China'
        ],
        answer: 1,
        why: 'The exams recruited scholar-officials trained in the Confucian classics and tied their status to imperial appointment. That weakened the claim of hereditary military aristocrats to rule.',
        traps: [
          'Reverses the relationship. Neo-Confucianism, not Buddhism, was the curriculum, even though Buddhism remained influential.',
          null,
          'Song China commercialized. The exams did not abolish trade.',
          'Anachronism. The exams long predate Mongol rule, and a kuriltai is a different institution.'
        ]
      },
      {
        skill: 'Continuity and change',
        stem: 'Which development in Song China most clearly shows a change in the economy rather than a continuity of Confucian government?',
        choices: [
          'The use of classical texts to select officials',
          'The growth of iron production, paper money, and markets supplied by Champa rice',
          'The claim that the emperor ruled through ritual and bureaucracy',
          'The writing of official histories'
        ],
        answer: 1,
        why: 'Champa rice, expanded iron output, and paper money belong to the Song commercial revolution. The other choices are continuities of imperial Confucian statecraft.',
        traps: [
          'This is a continuity of government, which the question set aside.',
          null,
          'A continuity of political ideology, not the economic change.',
          'A long-standing scholarly practice, not the commercial shift.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'Mali and the Swahili city-states were similar in the period 1200–1450 in that both',
        choices: [
          'relied on the Indian Ocean monsoon trade and had no contact with Islam',
          'built centralized empires that conquered Egypt',
          'grew wealthy from trade and were tied to wider Islamic networks',
          'were ruled from Constantinople'
        ],
        answer: 2,
        why: 'Mali’s gold and the Swahili coast’s Indian Ocean commerce both connected African elites to Muslim merchants, scholars, and pilgrimage routes. The political forms differed: Mali was a large empire, the Swahili towns were independent city-states.',
        traps: [
          'Mali’s main external route was trans-Saharan, and both regions had significant Muslim communities.',
          'Neither conquered Egypt.',
          null,
          'Neither was a Byzantine possession.'
        ]
      },
      {
        skill: 'Process',
        stem: 'The Inca mit’a and the Aztec demand for tribute differed from European manorialism in the same period mainly because the American systems',
        choices: [
          'were organized by large imperial states rather than by local lords on a fragmented political map',
          'did not require labor from subject peoples',
          'were created by Spanish viceroys before 1450',
          'abolished agriculture'
        ],
        answer: 0,
        why: 'Both the Inca and the Aztec extracted labor or goods through an imperial center. Western Europe’s manors answered to local lords in a politically fragmented setting.',
        traps: [
          null,
          'Both systems required labor or goods from subjects.',
          'Spanish rule in the Americas comes after 1450.',
          'Both empires depended on intensive agriculture, including chinampas and Andean terraces.'
        ]
      },
      {
        skill: 'Context',
        stimulus: 'A court writer praises a ruler who conquered a great city on the strait between two seas, turned its great church into a mosque, and claimed to be the heir of Roman glory as well as a ghazi on the frontier of Islam.',
        stem: 'The event in the passage is best placed in the context of',
        choices: [
          'the Mongol sack of Baghdad in 1258',
          'the Ottoman conquest of Constantinople in 1453',
          'the Umayyad conquest of Spain in 711',
          'the British occupation of Egypt in 1882'
        ],
        answer: 1,
        why: 'The strait, the church-turned-mosque, and the claim to Roman as well as ghazi legitimacy point to Mehmed II’s capture of Constantinople. 1453 sits at the edge of this unit and the next, which is why the date is the discriminator.',
        traps: [
          'Baghdad is not on the strait, and Hagia Sophia was not there.',
          null,
          '711 is centuries too early and the geography is Iberia.',
          'Wrong century and a European occupation, not a ghazi conquest.'
        ]
      },
      {
        skill: 'Claims',
        stimulus: 'Written for this drill. A scholar in Delhi writes that a new dynasty of Muslim sultans collects taxes from Hindu villages, patronizes Persian at court, and still depends on local chiefs who were never replaced.',
        stem: 'Which claim does the passage best support?',
        choices: [
          'The Delhi Sultanate governed North India without any local intermediaries',
          'Muslim rule in North India erased Hindu village life within a generation',
          'The sultanate’s power rested on a bargain with existing local elites as well as on its own military rule',
          'The sultanate was a province of the Song dynasty'
        ],
        answer: 2,
        why: 'The writer describes both a new Muslim court and the continued role of local chiefs. That is shared power, not a total replacement of local society.',
        traps: [
          'The passage says the opposite about local chiefs.',
          'Village taxes imply village society continued.',
          null,
          'No connection to Song China is stated or implied.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'Foot binding’s spread among elite families in Song China and the continued seclusion of elite women in many other patriarchal societies both illustrate',
        choices: [
          'a legal equality between husbands and wives that the exams required',
          'patriarchal control of women’s bodies and status, intensified where elite wealth could enforce it',
          'the disappearance of women from agricultural labor',
          'a Mongol law code imposed on China'
        ],
        answer: 1,
        why: 'Strayer’s treatment of patriarchy treats foot binding as an extreme form of a wider pattern: elite families used gender hierarchy to mark status. It was not an exam requirement or a Mongol import.',
        traps: [
          'The exams did not create equality inside the household.',
          null,
          'Peasant women continued to do field labor. Foot binding marked elites especially.',
          'Foot binding predates Mongol rule and was not a steppe law.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'Which factor best explains the political fragmentation of Western Europe around 1200, in contrast to Song China?',
        choices: [
          'A single pope who also commanded all European armies',
          'The absence of agriculture',
          'Decentralized lordship after the weakening of a unifying empire, with manors and vassalage organizing local power',
          'Direct rule from the Abbasid caliph in Baghdad'
        ],
        answer: 2,
        why: 'After Rome and under weak successors, European power sat with lords, vassals, and the Church, not with one tax-gathering bureaucracy on the Song model.',
        traps: [
          'The papacy was powerful and did not command a unified European army.',
          'Manorial agriculture was the economic base.',
          null,
          'Western Europe was not an Abbasid province.'
        ]
      },
      {
        skill: 'Sourcing',
        stimulus: 'Written for this drill. A Muslim traveler from the Mediterranean describes West African rulers as generous, pious, and astonishingly rich in gold. He is writing for readers in North Africa who have never seen the region.',
        stem: 'A historian should treat this account as',
        choices: [
          'proof that West Africa had no cities before the traveler arrived',
          'a useful description of wealth and Islamic court culture, shaped by the author’s wish to impress a distant Muslim audience',
          'an Inca census',
          'an unbiased administrative record of the Song salt monopoly'
        ],
        answer: 1,
        why: 'Travelers such as Ibn Battuta are evidence of how a Muslim observer saw Mali, not transparent data. Audience and amazement at gold are part of the source’s purpose.',
        traps: [
          'The description of courts and wealth implies cities and states already existed.',
          null,
          'Wrong region and genre.',
          'Wrong region, and “unbiased” ignores the author’s audience.'
        ]
      },
      {
        skill: 'Argument',
        stem: 'Which statement is the strongest historically defensible claim about the Americas before 1450?',
        choices: [
          'The Aztec and Inca empires were isolated villages with no labor systems',
          'The Aztec and Inca states organized large populations through tribute or labor obligations and intensive agriculture',
          'Both empires were Muslim caliphates',
          'Both empires traded directly with Song China by annual Atlantic fleets'
        ],
        answer: 1,
        why: 'Tribute, the mit’a, chinampas, and Andean roads are the course evidence that these were imperial states. The wrong choices invent religions, technologies, or a smallness the evidence does not support.',
        traps: [
          'Contradicts tribute, mit’a, and urban centers such as Tenochtitlan and Cusco.',
          null,
          'Islam was not the organizing religion of either empire.',
          'There was no such Atlantic fleet. American trade networks were regional.'
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Networks of Exchange',
    years: 'c. 1200–1450',
    strayer: 'Chapter 3',
    blurb: 'Silk Roads, the Mongol Empire, the Indian Ocean, the trans-Saharan routes, and the plague.',
    questions: [
      {
        skill: 'Causation',
        stem: 'The Mongol conquests increased Eurasian exchange most directly because they',
        choices: [
          'ended all long-distance trade in order to protect nomadic pastures',
          'secured relay stations, passes, and a period of relative safety that merchants and craftsmen could use',
          'forced every subject people to adopt Tibetan Buddhism only',
          'moved the capital of Mali to Karakorum'
        ],
        answer: 1,
        why: 'The yam, ortogh partnerships, and the transfer of artisans made movement cheaper and safer for a time, even though conquest itself destroyed cities.',
        traps: [
          'The opposite of Mongol commercial policy.',
          null,
          'Mongol religious policy was comparatively plural, not a single required conversion.',
          'Mali remained in West Africa.'
        ]
      },
      {
        skill: 'Continuity and change',
        stem: 'Which statement best describes the Indian Ocean network between 1200 and 1450?',
        choices: [
          'It began only after Vasco da Gama rounded the Cape',
          'Monsoon routes, diasporic merchant communities, and the spread of Islam continued, while Ming voyages briefly projected Chinese power into the ocean',
          'It was limited to the Mediterranean',
          'It collapsed when the Silk Roads opened'
        ],
        answer: 1,
        why: 'The sea roads were already old. What changes inside this period is the scale of Muslim merchant diasporas and the short Ming naval moment under Zheng He, later cut back by the court.',
        traps: [
          'Da Gama arrives in 1498, after this unit.',
          null,
          'The Indian Ocean is not the Mediterranean.',
          'Land and sea routes fed each other. One did not erase the other.'
        ]
      },
      {
        skill: 'Process',
        stem: 'Mansa Musa’s pilgrimage in 1324 is best used as evidence of',
        choices: [
          'Mali’s gold and its place in both trans-Saharan trade and the wider Islamic world',
          'the Inca road system',
          'Portuguese control of the Swahili coast',
          'the abolition of slavery in West Africa'
        ],
        answer: 0,
        why: 'The hajj displayed Mali’s wealth, its Muslim rulership, and the routes that carried gold toward North Africa and the Mediterranean.',
        traps: [
          null,
          'Wrong hemisphere.',
          'The Portuguese are not in the Indian Ocean in 1324.',
          'The pilgrimage is not an emancipation decree. Slavery continued, including inside Mali.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'The Black Death’s spread in the fourteenth century is most directly explained by',
        choices: [
          'the Columbian exchange',
          'the movement of people and goods along the same Afro-Eurasian routes the Mongol peace had helped keep open',
          'the Industrial Revolution',
          'isolation of every major city from trade'
        ],
        answer: 1,
        why: 'The pandemic traveled with caravans and ships. Connection was the mechanism. Isolation would have slowed it.',
        traps: [
          'The Columbian exchange begins after 1492.',
          null,
          'Industrialization is centuries later.',
          'The opposite of the mechanism.'
        ]
      },
      {
        skill: 'Claims',
        stimulus: 'Written for this drill. A Ming official argues that the treasure fleets cost more than they return, pull craftsmen away from agriculture, and do nothing to strengthen the Confucian order at home. He urges the emperor to stop them.',
        stem: 'The official’s argument is best understood as a claim that',
        choices: [
          'Zheng He’s voyages should continue because they spread Confucianism to Mali',
          'maritime projection was less valuable to the Ming state than domestic agrarian and Confucian priorities',
          'China had never built ships',
          'the voyages were ordered by the Ottoman sultan'
        ],
        answer: 1,
        why: 'The opposition to Zheng He inside the Ming court turned on cost and on a Confucian preference for the agrarian center over overseas adventure.',
        traps: [
          'The speaker wants the fleets stopped, and Mali was not their destination.',
          null,
          'The fleets are the subject, so shipbuilding is assumed.',
          'The Ming emperor, not the Ottoman sultan, sponsored the voyages.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'Goods moving on the Silk Roads and goods moving on the Indian Ocean differed mainly in that Indian Ocean trade',
        choices: [
          'could carry bulkier, heavier cargo because ships bore the weight more cheaply than camels',
          'excluded Islam',
          'was limited to luxury silk only',
          'did not use monsoon winds'
        ],
        answer: 0,
        why: 'Camels favored high-value, low-weight goods such as silk and silver. Ships could move timber, rice, cotton, and other bulk goods, which is why sea trade reached deeper into everyday economies.',
        traps: [
          null,
          'Islam spread along the sea roads.',
          'Sea trade included bulk goods, not silk alone.',
          'Monsoons were the operating system of the sea roads.'
        ]
      },
      {
        skill: 'Sourcing',
        stimulus: 'Written for this drill. A Venetian merchant’s book describes Chinese cities as larger and richer than any in Europe. He wrote after years of travel, for European readers who might doubt him.',
        stem: 'Which use of the book is most defensible?',
        choices: [
          'Reject it because a European cannot have visited Asia',
          'Use it as evidence of a European observer’s impression of Yuan cities, while asking what he exaggerated to persuade skeptical readers at home',
          'Treat every number in it as an official Chinese census',
          'Read it as an Aztec codex'
        ],
        answer: 1,
        why: 'This is the Polo problem Strayer raises: the book can show what a European thought he saw, and its purpose includes convincing an audience. It is not a census and not proof that travel was impossible.',
        traps: [
          'European travel to Asia in this period is well attested.',
          null,
          'A travel narrative is not a Chinese fiscal register.',
          'Wrong genre and region.'
        ]
      },
      {
        skill: 'Context',
        stem: 'The transfer of papermaking and gunpowder westward is best set in the context of',
        choices: [
          'trans-Saharan camel caravans only',
          'Afro-Eurasian contact, including the period of Mongol rule, when technologies moved with people',
          'the Meiji Restoration',
          'the isolation of Tokugawa Japan'
        ],
        answer: 1,
        why: 'Paper and gunpowder are Chinese technologies that reached western Afro-Eurasia through long networks. The Mongol period accelerated some of that movement. It was not a nineteenth-century event.',
        traps: [
          'Those technologies did not move only across the Sahara.',
          null,
          'Meiji is the late nineteenth century.',
          'Tokugawa limits on foreign contact come later and are a different story.'
        ]
      },
      {
        skill: 'Argument',
        stem: 'Which claim about diasporic communities in this period is strongest?',
        choices: [
          'They disappeared as soon as a merchant learned the local language',
          'Arab, Persian, Chinese, and Jewish merchant communities helped trade by offering trust, credit, and cultural footholds in foreign ports',
          'They existed only in Europe',
          'They prevented the spread of religion'
        ],
        answer: 1,
        why: 'Diasporas are a cause of trade’s continuity: shared law, kin, and religion lowered the risk of dealing with strangers.',
        traps: [
          'Diasporas persisted across generations.',
          null,
          'The important examples for this unit are in the Indian Ocean, Central Asia, and African ports.',
          'Diasporas often spread religion. Islam along the Swahili coast is the example.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'A historian arguing that Mongol rule both connected and devastated Eurasia would be most helped by which pair of facts?',
        choices: [
          'Relay stations expanded, and some conquered cities were destroyed and depopulated',
          'The Inca built roads, and the Aztecs used chinampas',
          'The British Parliament passed the Navigation Acts',
          'Haiti abolished slavery and became independent'
        ],
        answer: 0,
        why: 'An extent argument needs both sides. The yam is the connection. Sacked cities are the limit. The other pairs are real history from other units.',
        traps: [
          null,
          'True of the Americas, irrelevant to the Mongol claim.',
          'True of a later commercial empire, not this question.',
          'True of the Haitian Revolution, centuries later.'
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'Land-Based Empires',
    years: 'c. 1450–1750',
    strayer: 'Chapters 4 and 5, on the Ottoman, Safavid, Mughal, Russian, and Chinese empires and on religious change',
    blurb: 'How large land empires recruited elites, used gunpowder, and legitimized rule.',
    questions: [
      {
        skill: 'Comparison',
        stem: 'The Ottoman devshirme and the Safavid reliance on Qizilbash fighters differed in that the devshirme',
        choices: [
          'recruited Christian boys from the Balkans, converted them, and trained them as Janissaries and officials loyal to the sultan',
          'was a council of Aztec nobles',
          'abolished the Ottoman military',
          'made the Safavid empire Sunni'
        ],
        answer: 0,
        why: 'Devshirme built a slave elite loyal to the sultan rather than to tribal kin. Qizilbash power was the Safavid problem: Turkic tribal cavalry whose loyalty the shahs later tried to balance with enslaved Georgian and Circassian troops.',
        traps: [
          null,
          'Wrong empire.',
          'It created the Janissary infantry. It did not abolish the army.',
          'The Safavids established Shi’a Islam. The devshirme is Ottoman.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'Akbar’s policy toward Hindu elites in the Mughal Empire was designed mainly to',
        choices: [
          'prevent any non-Muslim from serving the state',
          'broaden the empire’s base by incorporating Rajput nobles and easing some restrictions on Hindu subjects',
          'introduce the civil service examinations of Song China',
          'move the capital to Edo'
        ],
        answer: 1,
        why: 'Marriage alliances, mansabdari rank, and the abolition of the jizya under Akbar were legitimation and recruitment tools in a Hindu-majority empire. Aurangzeb’s later reversal shows the policy was a choice, not a permanent fact.',
        traps: [
          'The opposite of Akbar’s incorporation of Rajputs.',
          null,
          'The exams are a Chinese institution, not Akbar’s reform.',
          'Edo is the Tokugawa capital.'
        ]
      },
      {
        skill: 'Process',
        stem: 'The Qing expansion into Central Asia and the Russian expansion across Siberia were similar in that both',
        choices: [
          'were overseas merchant ventures of the Dutch East India Company',
          'extended gunpowder empires into steppe and frontier regions and used bureaucracy to hold them',
          'restored the Abbasid caliphate',
          'ended in the fourteenth century'
        ],
        answer: 1,
        why: 'Strayer pairs these as land empires pushing into inner Asia. They are not chartered companies and not a restoration of Baghdad.',
        traps: [
          'The VOC is a maritime company, Unit 4.',
          null,
          'Neither empire was Abbasid.',
          'Both expansions are early modern, after 1450.'
        ]
      },
      {
        skill: 'Continuity and change',
        stem: 'Tokugawa Japan’s alternate attendance (sankin kotai) is best described as',
        choices: [
          'a requirement that daimyo spend time at Edo, which drained their resources and kept them under shogunal watch',
          'a pilgrimage required of all Muslims',
          'the Ming tribute system',
          'a Jesuit plan to convert China'
        ],
        answer: 0,
        why: 'Alternate attendance turned a warrior aristocracy into a supervised elite and helped keep the realm at peace under the shogun.',
        traps: [
          null,
          'Japan’s required travel here is political, not the hajj.',
          'Ming tribute is a Chinese foreign-policy system.',
          'Jesuit missions are a different chapter-5 story, and they were later banned in Japan.'
        ]
      },
      {
        skill: 'Claims',
        stimulus: 'Written for this drill. A Safavid chronicler writes that the shah cursed Sunni practice, funded Shi’a scholars from abroad, and required the sermon at Friday prayer to name the twelve imams.',
        stem: 'The chronicle best supports which claim?',
        choices: [
          'The Safavids used Shi’a Islam as a state ideology that distinguished them from the Sunni Ottomans and Mughals',
          'The Safavids adopted Mahayana Buddhism as the state religion',
          'The shah abolished Friday prayer',
          'The chronicle describes Akbar’s house of worship'
        ],
        answer: 0,
        why: 'Imposing Shi’a ritual was both religious policy and a way to mark Safavid subjects off from neighboring Sunni empires.',
        traps: [
          null,
          'The text is about imams and Shi’a scholars, not Buddhism.',
          'The text describes Friday prayer being regulated, not abolished.',
          'Akbar is Mughal, and the rituals named here are Safavid.'
        ]
      },
      {
        skill: 'Sourcing',
        stimulus: 'Written for this drill. An Ottoman miniature made for the sultan’s palace shows him larger than the Janissaries around him, receiving an ambassador under a canopy of calligraphy.',
        stem: 'The miniature is most useful as evidence of',
        choices: [
          'the exact number of soldiers in the Ottoman army',
          'how the court wanted the sultan’s power to look',
          'daily life in a peasant village with no connection to the palace',
          'Inca quipu records'
        ],
        answer: 1,
        why: 'Court art is an argument about legitimacy. Scale and setting tell you the intended image of rule, not a headcount.',
        traps: [
          'Artistic scale is not a census.',
          null,
          'The audience and setting are the palace.',
          'Wrong empire and technology.'
        ]
      },
      {
        skill: 'Context',
        stem: 'The Protestant Reformation belongs in this period’s world history primarily because it',
        choices: [
          'ended Christianity in Europe',
          'split Latin Christianity and pushed Catholic and Protestant states into overseas missions and conflicts that later went global',
          'was led by the Ming emperor',
          'created the Delhi Sultanate'
        ],
        answer: 1,
        why: 'Chapter 5 treats the Reformation as a fragmentation of Western Christendom that then traveled with empires. It did not end Christianity or originate in China or India.',
        traps: [
          'It divided Western Christianity. It did not erase it.',
          null,
          'It began in the German lands of the Holy Roman Empire.',
          'The Delhi Sultanate is centuries earlier and not a Christian movement.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'Which factor best explains why gunpowder empires could build larger central armies than the feudal levies of an earlier Europe?',
        choices: [
          'Cannons and firearms rewarded rulers who could tax, supply, and train standing forces',
          'Gunpowder made infantry useless',
          'Only societies without writing adopted cannons',
          'Gunpowder was unknown outside Europe'
        ],
        answer: 0,
        why: 'Siege guns and musket infantry were expensive. Rulers who controlled revenue could outgrow nobles who showed up with a personal retinue.',
        traps: [
          null,
          'Infantry became more important, not less.',
          'The Ottoman, Safavid, Mughal, and Ming-Qing states were literate bureaucratic empires.',
          'Gunpowder originated in China and was used across Asia.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'Monumental architecture in the Ottoman, Mughal, and French courts of this era shared which political purpose?',
        choices: [
          'To demonstrate that the ruler rejected all religion',
          'To make authority visible and to place the ruler at the center of a designed capital or shrine',
          'To house the Dutch East India Company’s shareholders',
          'To replace taxation'
        ],
        answer: 1,
        why: 'Süleymaniye, the Taj Mahal, and Versailles are different faiths and styles with the same political job: awe, order, and a court that revolves around the ruler.',
        traps: [
          'These buildings often displayed religion. They did not reject it.',
          null,
          'Versailles is a dynastic palace, not a VOC warehouse.',
          'Architecture displayed the fruits of taxation. It did not replace it.'
        ]
      },
      {
        skill: 'Argument',
        stem: 'Which thesis is historically defensible for this unit?',
        choices: [
          'Land empires between 1450 and 1750 legitimized rule only through naval exploration',
          'Rulers combined military force with religious and bureaucratic claims, and those claims differed by empire',
          'No empire in this period used written law',
          'All land empires granted full political equality to conquered peoples'
        ],
        answer: 1,
        why: 'Force was never the whole story. Devshirme, Shi’a ritual, Rajput alliances, the Qing civil service, and Tokugawa attendance are different tools for the same problem.',
        traps: [
          'Naval empire is Unit 4. These states were land-based.',
          null,
          'Bureaucracies and law codes are central to the unit.',
          'Conquered peoples were ranked, taxed, and sometimes tolerated. They were not equal citizens.'
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Transoceanic Interconnections',
    years: 'c. 1450–1750',
    strayer: 'Chapters 4 through 6, on the Americas, global Christianity, silver, and the slave trade',
    blurb: 'Maritime empires, the Columbian exchange, silver, and coerced labor.',
    questions: [
      {
        skill: 'Causation',
        stem: 'Which combination best explains Iberian maritime expansion in the fifteenth and sixteenth centuries?',
        choices: [
          'A desire for direct access to Asian spices and African gold, plus ships, guns, and a rivalry between Portugal and Spain',
          'An invitation from the Ming emperor to govern China',
          'The discovery of the steam engine',
          'The Berlin Conference'
        ],
        answer: 0,
        why: 'Portuguese routes around Africa and Spanish transatlantic voyages were state-backed searches for trade that existing Muslim and Italian intermediaries had controlled, carried out with new maritime technology.',
        traps: [
          null,
          'Ming China did not invite Iberian rule.',
          'Steam is an eighteenth- and nineteenth-century technology.',
          'The Berlin Conference is 1884–85.'
        ]
      },
      {
        skill: 'Process',
        stem: 'The Columbian exchange most accurately refers to',
        choices: [
          'the transfer of crops, animals, and diseases between the Americas and Afro-Eurasia after 1492',
          'the swap of the Song capital and the Mali capital',
          'a peace treaty between the Aztecs and the Inca',
          'the Mongol relay system'
        ],
        answer: 0,
        why: 'Maize and potatoes moved east. Horses, wheat, and smallpox moved west. The demographic collapse in the Americas is the exchange’s sharpest consequence.',
        traps: [
          null,
          'Those capitals were never exchanged.',
          'The Aztec and Inca empires did not sign such a treaty, and both fell to Spanish conquest.',
          'The yam belongs to Unit 2.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'American silver changed world trade in the sixteenth and seventeenth centuries primarily because it',
        choices: [
          'let Europeans buy into Asian markets, especially Chinese demand for silver, and linked Potosí to Manila and to Europe',
          'ended the use of money in China',
          'was used only inside Spain and never exported',
          'replaced the Atlantic slave trade'
        ],
        answer: 0,
        why: 'China’s tax system and its goods pulled silver across the Pacific on the Manila galleons and across the Atlantic. Spain’s empire was a hinge, not a closed box.',
        traps: [
          null,
          'Silver became more important in China, not less.',
          'The point of the silver trade is that it moved.',
          'Silver and the slave trade grew together. Sugar and mining both used coerced labor.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'Plantation slavery in Brazil and the Caribbean differed from many forms of coerced labor inside West Africa in that the plantation system',
        choices: [
          'tied enslaved labor to export monocultures worked at a deadly scale for distant markets',
          'did not involve captivity',
          'was organized by the Inca mit’a',
          'employed only wage-earning European farmers'
        ],
        answer: 0,
        why: 'Slavery existed in Africa before the Atlantic trade. The American plantation was a new intensity: racialized, hereditary in colonial law, and geared to sugar or tobacco for export.',
        traps: [
          null,
          'Captivity defined it.',
          'The mit’a was Andean labor tribute, later distorted by Spanish silver mining, not Brazilian sugar.',
          'The laborers were enslaved Africans and their descendants, not free European farmers.'
        ]
      },
      {
        skill: 'Continuity and change',
        stem: 'Which statement best captures the effect of the Atlantic slave trade on West African politics?',
        choices: [
          'Every African state collapsed immediately and none benefited',
          'Some states, such as those that controlled the coast or the supply of captives, grew more militarized and powerful, while raided regions lost people',
          'West Africa stopped all trade with Europeans after 1500',
          'The trade replaced gold exports with exports of paper money'
        ],
        answer: 1,
        why: 'An extent answer has to hold both facts: Dahomey, Asante, and Oyo could grow from the trade, and the demographic and social damage in raided areas was severe.',
        traps: [
          'Too absolute. Some states expanded because of the trade.',
          null,
          'The trade intensified contact.',
          'The major exports were captives, gold, and other goods, not paper money.'
        ]
      },
      {
        skill: 'Context',
        stimulus: 'Written for this drill. A Mexican devotee describes a holy figure who appeared on a hill sacred to an older mother goddess, spoke Nahuatl, and asked for a church. The bishops eventually accepted the cult.',
        stem: 'The passage is best understood in the context of',
        choices: [
          'the Protestant Reformation in Germany only, with no American echo',
          'religious blending in Spanish America, as in the cult of the Virgin of Guadalupe',
          'the Tokugawa ban on Christianity in Japan, which is the same event',
          'the founding of the Song dynasty'
        ],
        answer: 1,
        why: 'Guadalupe is the textbook case of conversion that did not erase older sacred geography. Indigenous language and a pre-Christian site sit inside a Catholic cult the Church then claimed.',
        traps: [
          'The geography and language are Mexican.',
          null,
          'Japan’s ban is a related global-Christianity story, not this apparition.',
          'Wrong century and region.'
        ]
      },
      {
        skill: 'Sourcing',
        stimulus: 'Written for this drill. A Spanish encomendero’s report to the crown lists the tribute he collects and insists the people under him are treated well. A Dominican friar writing in the same decade describes the same villages as emptied by overwork.',
        stem: 'Reading the two sources together most strongly suggests that',
        choices: [
          'both can be quoted as neutral facts without asking who benefits',
          'the encomendero’s audience and interest shape a defense of his grant, while the friar’s vocation shapes an attack on it',
          'the friar must be wrong because he is religious',
          'neither author could have known anything about the Americas'
        ],
        answer: 1,
        why: 'This is a sourcing question. Purpose and audience explain the contradiction better than throwing both texts out or believing the man who profits.',
        traps: [
          'Interest is the point of the comparison.',
          null,
          'Religious authors are not automatically wrong. Las Casas is evidence precisely because of his role.',
          'Both are writing from the colonial setting.'
        ]
      },
      {
        skill: 'Claims',
        stem: 'Joint-stock companies such as the Dutch and English East India companies mattered in this period because they',
        choices: [
          'let merchants pool capital and exercise state-like powers in Asian trade without being royal empires on the Ottoman model',
          'were peasant communes in Russia',
          'abolished private property',
          'replaced the Mughal Empire in 1453'
        ],
        answer: 0,
        why: 'The companies carried cannons, made treaties, and paid dividends. They are the commercial form of maritime empire, distinct from the land empires of Unit 3.',
        traps: [
          null,
          'Wrong institution. Russian peasants are not VOC shareholders.',
          'They existed to concentrate capital, not to abolish it.',
          '1453 is the Ottoman capture of Constantinople, not a company conquest of India.'
        ]
      },
      {
        skill: 'Argument',
        stem: 'Which claim about the Spanish casta system is defensible?',
        choices: [
          'It described a flexible set of racial categories that organized status, marriage, and labor in colonial society',
          'It proved that Spanish America had no hierarchy',
          'It was the same document as the Magna Carta',
          'It applied only inside France'
        ],
        answer: 0,
        why: 'Casta paintings and parish records sorted people by ancestry. The categories were real in law and social life, and they were also unstable in practice.',
        traps: [
          null,
          'The system was a hierarchy.',
          'Wrong document and century.',
          'It is a Spanish-American classification.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'Russian fur extraction in Siberia and Spanish silver extraction in the Andes were similar in that both',
        choices: [
          'pulled subject or indigenous labor into a commodity demanded by distant markets',
          'were run by the Tokugawa shogun',
          'ended nomadic life in Arabia',
          'used no coercion'
        ],
        answer: 0,
        why: 'Strayer’s “world hunt” and the Potosí mita are different goods with the same structure: an empire turns a people’s labor and a landscape into an export.',
        traps: [
          null,
          'Neither enterprise was Japanese.',
          'The geographies are Siberia and the Andes.',
          'Both depended on coerced or heavily pressured labor.'
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'Revolutions',
    years: 'c. 1750–1900',
    strayer: 'Chapter 7',
    blurb: 'Atlantic revolutions, Haiti, Latin American independence, abolition, and early feminism.',
    questions: [
      {
        skill: 'Comparison',
        stem: 'The American and French revolutions shared which feature and differed in which other?',
        choices: [
          'Both cited natural rights against a monarchy’s taxes and privilege. The French Revolution went on to overturn the social order at home more radically than the American war did.',
          'Both were led by enslaved people who founded the first Black republic',
          'Both restored absolute monarchy and the nobility’s legal privileges as their final act',
          'Both were begun by Simón Bolívar'
        ],
        answer: 0,
        why: 'A comparison needs the shared category and the difference. Rights language is the share. The depth of social overturning is the difference. Haiti, not the Thirteen Colonies or France, became the Black republic born from slavery.',
        traps: [
          null,
          'That description fits Haiti, not these two.',
          'France abolished legal privilege. The American Revolution did not restore a French-style estate system because it had not had one in the same form.',
          'Bolívar belongs to Spanish American independence.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'The Haitian Revolution most directly resulted in',
        choices: [
          'the continuation of French plantation slavery under a new name and no independent state',
          'the abolition of slavery in Saint-Domingue and the independence of Haiti, which frightened slaveholding societies across the Atlantic',
          'the Meiji Restoration',
          'the partition of Poland'
        ],
        answer: 1,
        why: '1791–1804 produced the first state born from a successful revolt of enslaved people. Its consequences were emancipation, independence, and a warning to planters elsewhere.',
        traps: [
          'Slavery was abolished and the colony did not remain French.',
          null,
          'Meiji is Japan in 1868.',
          'Unrelated European diplomacy.'
        ]
      },
      {
        skill: 'Context',
        stem: 'Latin American independence movements after 1808 are best placed in the context of',
        choices: [
          'Napoleon’s invasion of Spain, which broke the link to the crown, and creole resentment of peninsular privilege',
          'the fall of the Han dynasty',
          'the First Crusade',
          'the Green Revolution of the twentieth century'
        ],
        answer: 0,
        why: 'The creoles did not simply copy the United States. The crisis of the Spanish monarchy in 1808 opened the political break, and local hierarchies shaped what kind of states followed.',
        traps: [
          null,
          'Wrong millennium.',
          'Wrong millennium.',
          'The Green Revolution is a twentieth-century agricultural change.'
        ]
      },
      {
        skill: 'Claims',
        stimulus: 'Written for this drill. A 1791 French deputy argues that liberty is universal and then warns that freeing enslaved people in the Caribbean would ruin the colonies that pay for that liberty at home.',
        stem: 'The passage best supports the claim that',
        choices: [
          'revolutionary rights language and the profits of slavery were in open conflict',
          'the deputy was an Inca governor',
          'France had already freed every enslaved person in 1600',
          'the speaker rejected the idea of liberty entirely'
        ],
        answer: 0,
        why: 'He uses universal liberty and then limits it where sugar revenue is at stake. That contradiction is the historical point, and it is why Haiti’s revolt exposed the limit of the declaration.',
        traps: [
          null,
          'Nothing in the passage supports that identity.',
          'Emancipation in the French empire was later, partial, and reversed before Haiti settled it.',
          'He affirms liberty and then restricts who receives it. That is not a rejection of the word.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'Enlightenment writers contributed to Atlantic revolutions chiefly by',
        choices: [
          'supplying a language of natural rights and popular sovereignty that rebels used, often beyond what those writers had intended',
          'inventing the steam engine',
          'commanding the Jacobin armies in person',
          'ending patriarchy in Europe before 1750'
        ],
        answer: 0,
        why: 'Ideas did not fire the muskets by themselves. They made a political claim available: authority is legitimate only when it rests on rights or the nation, not on birth alone.',
        traps: [
          null,
          'That is industrialization, and it is a technology, not a pamphlet.',
          'Philosophes were not the generals.',
          'Feminist beginnings come during and after the revolutions, and patriarchy did not end.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'Abolitionism and early feminism in the late eighteenth and nineteenth centuries were connected because both',
        choices: [
          'used the revolutions’ rights language to challenge a hierarchy the revolutions had left standing',
          'were led by the Congress of Vienna in order to restore divine-right monarchy',
          'rejected the idea that anyone had natural rights',
          'succeeded in giving all women the vote by 1800'
        ],
        answer: 0,
        why: 'Strayer’s “echoes of revolution” puts abolition and women’s claims next to each other. Both asked why a universal right stopped at the color line or the household.',
        traps: [
          null,
          'Vienna was a conservative settlement against the revolution, not the author of feminism.',
          'They extended rights language. They did not abandon it.',
          'Women’s suffrage is largely a twentieth-century achievement.'
        ]
      },
      {
        skill: 'Sourcing',
        stimulus: 'Written for this drill. Simón Bolívar, writing to a correspondent in Jamaica, warns that Spanish Americans are not ready for the same constitution as the United States and need a stronger executive.',
        stem: 'A careful reader uses this letter as evidence of',
        choices: [
          'Bolívar’s political judgment and his audience, not as proof that no republic in the Americas could survive',
          'the text of the U.S. Constitution itself',
          'Haitian law in 1804',
          'a Japanese rejection of the shogun'
        ],
        answer: 0,
        why: 'The Jamaica letter is a leader arguing for a kind of state. It shows his fears and his purpose. It does not settle the fate of every republic.',
        traps: [
          null,
          'He is commenting on a comparison, not publishing the U.S. Constitution.',
          'Wrong revolution.',
          'Wrong region.'
        ]
      },
      {
        skill: 'Process',
        stem: 'The Congress of Vienna (1815) is significant in this unit because it',
        choices: [
          'tried to restore monarchical and conservative order in Europe after Napoleon',
          'abolished all European empires',
          'granted independence to every colony in Africa',
          'began the Mongol Empire'
        ],
        answer: 0,
        why: 'Vienna is the counter-revolution’s diplomatic face. The revolutions’ ideas survived it, which is the continuity inside the reaction.',
        traps: [
          null,
          'It preserved empires and monarchies.',
          'The scramble for Africa comes later. Vienna did not free African colonies.',
          'Wrong century.'
        ]
      },
      {
        skill: 'Argument',
        stem: 'Which statement about the Atlantic revolutions is the strongest?',
        choices: [
          'They were identical events with the same social outcome in every country',
          'They shared a generation and a rights vocabulary, and they produced different settlements for slavery, class, and colonial rule',
          'They were caused only by the price of bread in one city',
          'They ended war in Europe'
        ],
        answer: 1,
        why: '“Global echoes” is Strayer’s frame: one political moment, not one script. Haiti, France, British North America, and Spanish America did not free the same people.',
        traps: [
          'The differences are the point of the comparison.',
          null,
          'Bread prices mattered in France. They do not explain Haiti or Caracas by themselves.',
          'The Napoleonic wars followed the French Revolution.'
        ]
      },
      {
        skill: 'Continuity and change',
        stem: 'Which outcome shows a limit of the Atlantic revolutions rather than their fullest extension?',
        choices: [
          'Haiti’s independence and the abolition of slavery there',
          'The survival of slavery in the United States and Brazil long after independence, and the exclusion of women from political citizenship',
          'The declaration that natural rights exist',
          'The overthrow of Saint-Domingue’s plantation regime'
        ],
        answer: 1,
        why: 'A limit is a place the new language stopped. Haiti is the extension. Continued slavery and the exclusion of women are the limit.',
        traps: [
          'This is a radical change, not the limit.',
          null,
          'This is the shared claim, not a limit on it.',
          'This is the extension of the revolutionary challenge.'
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Consequences of Industrialization',
    years: 'c. 1750–1900',
    strayer: 'Chapters 8, 9, and 10',
    blurb: 'Industrial society, reform, and the new imperialism in Asia, Africa, and Oceania.',
    questions: [
      {
        skill: 'Causation',
        stem: 'Which conditions best explain why industrial production began in Britain rather than in a single causal slogan?',
        choices: [
          'Coal and iron near water transport, capital from commerce including the slave trade, and a state that protected property and markets',
          'Britain’s complete lack of colonies',
          'A decision by the Qing emperor to build the first factories in Manchester',
          'The absence of any agricultural change'
        ],
        answer: 0,
        why: 'Strayer treats “why Europe?” as a debate, not a moral compliment. Coal, wages, markets, and empire sit together. No one of them is the whole cause.',
        traps: [
          null,
          'Empire and colonial markets were part of the context, not absent from it.',
          'The Qing did not found British industry.',
          'Agricultural change freed labor and fed cities.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'Industrialization in the United States and in Russia before 1914 differed mainly in that Russia’s',
        choices: [
          'was driven later and more heavily by the state, and it left a revolutionary socialist movement in its wake',
          'occurred in the twelfth century under the Inca',
          'produced no railroads or factories',
          'was a copy of Tokugawa seclusion'
        ],
        answer: 0,
        why: 'The United States industrialized with private capital and without a large socialist party in power. Russia’s state pushed railroads and factories, and the social strain fed revolution.',
        traps: [
          null,
          'Wrong century and hemisphere.',
          'Russia did build railroads and factories, especially late in the century.',
          'Russia was opening to foreign capital, not copying Japanese seclusion.'
        ]
      },
      {
        skill: 'Process',
        stem: 'The Luddites are best understood as',
        choices: [
          'workers who smashed machines because those machines threatened skilled livelihoods, not as people who hated every technology in the abstract',
          'Qing officials opposing the Macartney mission',
          'the inventors of the cotton gin',
          'a feminist organization in Java'
        ],
        answer: 0,
        why: 'Machine breaking was a defense of skill and wages inside the new factory order. Kartini, not the Luddites, is Strayer’s figure for feminism and nationalism in Java.',
        traps: [
          null,
          'Wrong country and issue.',
          'They resisted certain machines. They did not invent the gin.',
          'Wrong movement.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'The Opium War (1839–1842) is best explained by',
        choices: [
          'British determination to keep selling opium in China after Lin Zexu tried to stop the trade, followed by a military victory and unequal treaties',
          'China’s invasion of London',
          'a dispute over the Inca mit’a',
          'the success of the Taiping Rebellion, which happened before the war and won it'
        ],
        answer: 0,
        why: 'Lin’s seizure of opium, British gunboats, the Treaty of Nanjing, and the opening of treaty ports are one causal chain. The Taiping Rebellion comes after, in 1850.',
        traps: [
          null,
          'The war was fought in China.',
          'Wrong hemisphere.',
          'The Taiping Rebellion began in 1850, after the first Opium War, and it did not win.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'The Ottoman Tanzimat and the Meiji reforms were similar in that both',
        choices: [
          'were responses to Western military and economic pressure that tried to strengthen the state by selective borrowing',
          'restored samurai rule and ended all industry',
          'were led by Lin Zexu',
          'returned each empire to complete isolation'
        ],
        answer: 0,
        why: 'The comparison Strayer draws is success and failure under the same kind of pressure. Japan’s revolution from above went further. The Ottomans reformed and remained vulnerable. The shared aim was state survival.',
        traps: [
          null,
          'Meiji undermined samurai privilege and built industry.',
          'Lin Zexu is the Qing official associated with opium, not the author of either reform program.',
          'Both opened to foreign models rather than closing.'
        ]
      },
      {
        skill: 'Context',
        stem: 'The Berlin Conference of 1884–85 belongs in the context of',
        choices: [
          'European states dividing rules for claims in Africa during the scramble, largely without African rulers in the room',
          'the Council of Trent',
          'the writing of the Code of Hammurabi',
          'the foundation of the Han dynasty'
        ],
        answer: 0,
        why: 'The conference did not “create” every colony by itself. It organized a European rush already underway and signaled how little African sovereignty counted in European diplomacy.',
        traps: [
          null,
          'The Council of Trent is a sixteenth-century Catholic reform council.',
          'Wrong millennium.',
          'Wrong millennium.'
        ]
      },
      {
        skill: 'Claims',
        stimulus: 'Written for this drill. An Ethiopian royal chronicle celebrates the victory at Adwa in 1896 and says the empire kept its throne because it had modern rifles and a united command.',
        stem: 'Which claim is best supported?',
        choices: [
          'Ethiopia’s victory shows that every African society defeated European conquest',
          'European conquest was resistible where a state could mobilize new weapons and political unity, as Ethiopia did at Adwa',
          'Adwa caused the end of the Second World War',
          'Ethiopia was a British dominion after the battle'
        ],
        answer: 1,
        why: 'Adwa is the famous exception inside a period of European advance. One victory does not make the scramble a failure everywhere, and it does not make Ethiopia a British dominion.',
        traps: [
          'Too broad. Most of Africa was partitioned.',
          null,
          'Adwa is 1896. The Second World War is a half-century later.',
          'The point of Adwa is that Ethiopia stayed independent.'
        ]
      },
      {
        skill: 'Sourcing',
        stimulus: 'Written for this drill. A British missionary textbook tells schoolchildren in a colony that empire brings them civilization, commerce, and Christianity. It is assigned by the colonial school.',
        stem: 'The textbook is most revealing as evidence of',
        choices: [
          'the empire’s own justification, taught to the people it ruled',
          'a neutral census of colonial wages',
          'an African petition against hut taxes',
          'the secret terms of the Treaty of Nanjing'
        ],
        answer: 0,
        why: 'Purpose and audience are the colonial state talking to children. The book can show ideology. It cannot, by itself, show that the ideology was accepted or that wages were fair.',
        traps: [
          null,
          'It is a lesson in justification, not a wage table.',
          'The voice is British and official, not a protest petition.',
          'Nanjing is 1842 and is not this textbook.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'Cash-crop economies under colonial rule often displaced older subsistence patterns because',
        choices: [
          'taxes payable in colonial currency, and merchant demand, pushed farmers to grow cotton, cocoa, or rubber for export',
          'colonial states forbade all agriculture',
          'farmers preferred crops that could not be eaten, for religious reasons only',
          'the Mongol yam required cocoa'
        ],
        answer: 0,
        why: 'Strayer’s “economies of cash-crop agriculture” turn on the pull of the market and the push of the tax man. The change is forced and chosen at the same time, which is why it is a causation question rather than a slogan.',
        traps: [
          null,
          'They reorganized agriculture. They did not ban it.',
          'The mechanism is taxes and prices, not a taboo on food crops.',
          'Wrong century and institution.'
        ]
      },
      {
        skill: 'Argument',
        stem: 'Which claim about nineteenth-century imperialism is the most precise?',
        choices: [
          'Industrial powers expanded empires using new weapons, steam transport, and racial ideologies, and colonized peoples both resisted and collaborated',
          'Empire ended worldwide in 1815',
          'Only Africa was affected, and Asia remained untouched',
          'Industrialization reduced Europe’s interest in colonies'
        ],
        answer: 0,
        why: 'A precise claim includes the tools, the idea that justified them, and the divided response on the ground. Resistance and collaboration are both in the record.',
        traps: [
          null,
          '1815 is Vienna, not decolonization. The new imperialism comes later.',
          'Chapter 9 is the Ottoman, Chinese, and Japanese story. Asia was central.',
          'Industry increased the capacity and the motives for empire.'
        ]
      }
    ]
  },
  {
    id: 7,
    name: 'Global Conflict',
    years: 'c. 1900–present',
    strayer: 'Chapter 11',
    blurb: 'The world wars, the Depression, authoritarian states, and revolution.',
    questions: [
      {
        skill: 'Causation',
        stem: 'Which statement best explains the outbreak of the First World War?',
        choices: [
          'The assassination of Franz Ferdinand triggered a crisis that alliances, mobilization plans, imperial rivalry, and nationalism had already made explosive',
          'The assassination was the only cause, and Europe had been disarmed and alliance-free',
          'The war began when the United Nations failed to act',
          'The war was caused by the dissolution of the Soviet Union'
        ],
        answer: 0,
        why: 'A trigger is not a cause by itself. The July crisis mattered because the alliance system and military timetables turned a Balkan murder into a continental war.',
        traps: [
          null,
          'Alliances and arms were in place. Calling the assassination the only cause is the trap.',
          'The United Nations was founded in 1945.',
          'The Soviet Union dissolved in 1991.'
        ]
      },
      {
        skill: 'Continuity and change',
        stem: 'The First World War changed European empires most clearly by',
        choices: [
          'leaving them larger, richer, and politically unquestioned',
          'killing millions, toppling several dynasties, and opening challenges from colonies whose soldiers had fought for those empires',
          'abolishing nationalism everywhere',
          'uniting all of Europe under the Ottoman sultan'
        ],
        answer: 1,
        why: 'The war broke the Russian, German, Austro-Hungarian, and Ottoman empires in Europe and damaged the moral claim of the British and French empires abroad. It did not end nationalism.',
        traps: [
          'The opposite of the fiscal and political result.',
          null,
          'Nationalism intensified, including in the colonies and in fascist movements.',
          'The Ottoman Empire was defeated and partitioned.'
        ]
      },
      {
        skill: 'Context',
        stem: 'The Great Depression belongs in the background of the 1930s because it',
        choices: [
          'undercut faith in liberal capitalism and helped authoritarian movements promise order and recovery',
          'was caused by the Black Death',
          'led directly to the Ming voyages',
          'ended unemployment worldwide within a year'
        ],
        answer: 0,
        why: 'Mass unemployment made liberal governments look helpless. That context does not mean the Depression “caused” every dictatorship by itself. It made their promises easier to believe.',
        traps: [
          null,
          'Wrong century.',
          'Zheng He is the early fifteenth century.',
          'Unemployment deepened and lasted.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'German fascism and Soviet communism, as Strayer compares them, were similar in which respect and different in which other?',
        choices: [
          'Both built single-party states that used terror and mass mobilization. They differed in that the Soviet project claimed to abolish private ownership of production while Nazism organized a racial empire and kept major capitalists',
          'Both were parliamentary democracies led by elected socialist parties',
          'Both were pacifist movements that disbanded their armies',
          'Both restored the caliphate'
        ],
        answer: 0,
        why: 'The snapshot comparison is the exam skill: similar methods of rule, different social purposes. Collapsing them into “the same idea” misses the racial state and the class state.',
        traps: [
          null,
          'Neither was a liberal democracy.',
          'Both were militarized.',
          'Neither was an Islamic restoration.'
        ]
      },
      {
        skill: 'Process',
        stem: 'Japan’s path into the Second World War in Asia is most accurately dated from',
        choices: [
          'the invasion of China in 1937, with earlier expansion in Manchuria, rather than from Pearl Harbor alone',
          'the Meiji Restoration in 1868 as the first battle of that war',
          'the Battle of Adwa',
          'the Treaty of Versailles, which Japan refused to sign'
        ],
        answer: 0,
        why: 'Strayer dates the Asian war from 1937. Pearl Harbor in 1941 brought the United States in. It did not start Japan’s war in China.',
        traps: [
          null,
          '1868 is a revolution in government, not the start of the Second World War.',
          'Adwa is Ethiopia in 1896.',
          'Japan signed Versailles and was angered by the rejection of a racial-equality clause, which is a different fact.'
        ]
      },
      {
        skill: 'Claims',
        stimulus: 'Written for this drill. A colonial soldier’s letter home in 1916 says he has seen white men kill each other in the mud and that he no longer believes the empire’s claim to be a natural ruler.',
        stem: 'The letter best supports which claim?',
        choices: [
          'Service in the war could weaken the racial justification of empire in the minds of colonized soldiers',
          'No colonial subjects fought in the First World War',
          'The soldier was a general at the Congress of Vienna',
          'The letter proves the League of Nations prevented the Second World War'
        ],
        answer: 0,
        why: 'Indian, African, and other colonial troops fought in large numbers. Their testimony is evidence of a political consequence, not a statistic of the trenches alone.',
        traps: [
          null,
          'The letter is itself evidence that they fought.',
          'Wrong century and rank.',
          'The League did not prevent the next war, and this letter is not about the League.'
        ]
      },
      {
        skill: 'Sourcing',
        stimulus: 'Written for this drill. A Nazi propaganda film from 1938 shows healthy rural families and does not show camps, censorship, or conquest.',
        stem: 'A historian should use the film as evidence of',
        choices: [
          'what the regime wanted Germans to believe about itself',
          'a complete record of life in Germany in 1938',
          'Soviet collectivization',
          'the proceedings of the Paris Peace Conference'
        ],
        answer: 0,
        why: 'Propaganda is a source for intention and audience. Absence of violence in the film is the point of the film, not evidence that the violence was absent.',
        traps: [
          null,
          'A complete record would include what the film leaves out.',
          'Wrong state.',
          'Wrong genre and year. The Paris conference is 1919.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'The Chinese Communist victory in 1949 is best connected to the Second World War by which fact?',
        choices: [
          'Japanese invasion weakened the Nationalist state and let the Communists build rural support, so the civil war’s outcome followed the global war',
          'Mao was appointed emperor by the League of Nations',
          'The victory happened during the Opium War',
          'It resulted from the Berlin Conference'
        ],
        answer: 0,
        why: 'The war in Asia rearranged Chinese politics. Treating 1949 as unrelated to 1937–1945 misses the mechanism.',
        traps: [
          null,
          'There was no such appointment.',
          'The Opium War is a century earlier.',
          'The Berlin Conference is about the scramble for Africa.'
        ]
      },
      {
        skill: 'Argument',
        stem: 'Which statement about the world wars is historically defensible and not a slogan?',
        choices: [
          'They were global because empires pulled soldiers, labor, and resources from colonies, and because the fighting itself spread through East Asia, Africa, and the Pacific',
          'They were fought only in France',
          'They ended empire immediately in 1918',
          'They had no effect on women’s work'
        ],
        answer: 0,
        why: '“World” is a claim you can prove with colonial troops, the Pacific war, and North African campaigns. The other choices are contradicted by the same evidence.',
        traps: [
          null,
          'The geography was far wider.',
          'Empire lasted, in most of Africa and Asia, until after 1945.',
          'Total war pulled women into industry and services. The extent of lasting change is a separate argument, which the 2026 DBQ asks you to make.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'The League of Nations and the early United Nations are best compared as',
        choices: [
          'two attempts to manage international conflict. The League lacked the major powers’ consistent membership and failed in the 1930s. The United Nations was built afterward with the victors inside it, and it still did not end war',
          'two names for the Warsaw Pact',
          'medieval guilds',
          'identical organizations that both prevented every war after their founding'
        ],
        answer: 0,
        why: 'Comparison here is continuity of purpose and change of design. Neither fact lets you say “international organization always works” or “never works.”',
        traps: [
          null,
          'The Warsaw Pact was a Cold War military alliance.',
          'Wrong era.',
          'Both failed to stop major wars. That shared limit is part of the comparison, not proof that they were identical.'
        ]
      }
    ]
  },
  {
    id: 8,
    name: 'Cold War and Decolonization',
    years: 'c. 1900–present',
    strayer: 'Chapter 12',
    blurb: 'Superpower rivalry, China after 1949, and the end of European empires.',
    questions: [
      {
        skill: 'Causation',
        stem: 'The Cold War is best defined as',
        choices: [
          'a political, military, and ideological rivalry between the United States and the Soviet Union that structured alliances and proxy wars without a direct war between the two superpowers',
          'a single battle in 1916',
          'the scramble for Africa in the 1880s',
          'a religious schism inside the Catholic Church'
        ],
        answer: 0,
        why: 'The definition has to include both the absence of a US–Soviet general war and the presence of real wars fought by others, from Korea to Afghanistan.',
        traps: [
          null,
          'That would be the Somme, inside the First World War.',
          'Wrong conflict and decade.',
          'Wrong kind of division.'
        ]
      },
      {
        skill: 'Process',
        stem: 'Nonalignment, associated with the Bandung Conference of 1955, was an attempt by new states to',
        choices: [
          'avoid becoming simple clients of either superpower while still seeking aid and a voice',
          'rejoin the British Empire',
          'abolish the United Nations',
          'restore the Qing dynasty'
        ],
        answer: 0,
        why: 'Bandung and the Non-Aligned Movement were not neutrality in the sense of having no politics. They were a claim that decolonized states could refuse the binary.',
        traps: [
          null,
          'The point was to leave empire, not rejoin it.',
          'Many of these states used the United Nations as a forum.',
          'The Qing had fallen in 1912.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'Decolonization in India (1947) and in Algeria (1962) differed most sharply in that',
        choices: [
          'British India was partitioned at independence after a mass nationalist movement, while Algerian independence followed a long war against a settler state that treated Algeria as part of France',
          'neither involved nationalism',
          'both were granted by the Mongol khan',
          'Algeria became independent in the seventeenth century'
        ],
        answer: 0,
        why: 'The comparison is method and cost. Partition and communal violence on one side, a brutal colonial war on the other. Both are decolonization. They are not the same story.',
        traps: [
          null,
          'Nationalism was central to both.',
          'Wrong century and actor.',
          'Algerian independence is 1962.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'Mao’s Great Leap Forward (1958–1962) caused a famine primarily because',
        choices: [
          'the state forced unrealistic steel and grain targets, distorted local reporting, and reorganized agriculture in ways that collapsed production',
          'China adopted a laissez-faire ban on all planning',
          'it privatized every farm to foreign shareholders',
          'it was a naval blockade by Portugal'
        ],
        answer: 0,
        why: 'The famine was political as well as agricultural. Quotas and fear of reporting failure made the harvest look successful while people starved.',
        traps: [
          null,
          'The Leap was the opposite of laissez-faire.',
          'It collectivized. It did not sell the land to foreign shareholders.',
          'There was no such blockade.'
        ]
      },
      {
        skill: 'Context',
        stem: 'The Cuban Missile Crisis of 1962 is best understood in the context of',
        choices: [
          'nuclear rivalry and a revolution on the doorstep of the United States, inside a world already divided into hostile alliances',
          'the War of the Spanish Succession',
          'the spread of Buddhism on the Silk Roads',
          'the drafting of the U.S. Constitution'
        ],
        answer: 0,
        why: 'Cuba matters because of the missiles and because of what Castro’s revolution meant in the Cold War, not as an isolated Caribbean event.',
        traps: [
          null,
          'An eighteenth-century European war.',
          'Unit 2.',
          '1787, and a different crisis.'
        ]
      },
      {
        skill: 'Claims',
        stimulus: 'Written for this drill. Kwame Nkrumah tells a crowd that political independence is not enough if foreign companies still set the price of cocoa and own the mines.',
        stem: 'The speech best supports the claim that',
        choices: [
          'some nationalist leaders saw decolonization as unfinished while economic dependence remained',
          'Nkrumah opposed Ghana’s independence',
          'cocoa prices were set by the Inca',
          'he was arguing for a return to British rule'
        ],
        answer: 0,
        why: 'Strayer’s “after freedom” problem is exactly this: the flag changed and the export economy often did not. Nkrumah is pressing that distinction, not rejecting independence.',
        traps: [
          null,
          'He is saying independence must go further, not that it was a mistake to seek it.',
          'Absurd agent.',
          'The speech attacks remaining colonial economics. It does not ask for the empire back.'
        ]
      },
      {
        skill: 'Sourcing',
        stimulus: 'Written for this drill. A 1966 official Chinese poster shows students holding Mao’s book above a fallen teacher. It was printed by the state.',
        stem: 'The poster is most useful for studying',
        choices: [
          'how the Cultural Revolution wanted to picture generational rebellion and loyalty to Mao',
          'the actual number of teachers killed, which a poster states with census accuracy',
          'Tokugawa village law',
          'the military strategy of the Battle of Adwa'
        ],
        answer: 0,
        why: 'State art during the Cultural Revolution is a claim about who should hold authority. It is poor evidence for a body count and strong evidence for the intended story.',
        traps: [
          null,
          'Posters persuade. They do not count.',
          'Wrong century.',
          'Wrong event.'
        ]
      },
      {
        skill: 'Continuity and change',
        stem: 'Deng Xiaoping’s reforms after 1978 changed the Chinese economy chiefly by',
        choices: [
          'keeping Communist Party rule while opening markets, foreign investment, and household farming',
          'restoring the Qing emperor',
          'joining the Warsaw Pact as its leader',
          'abolishing all industry'
        ],
        answer: 0,
        why: 'The continuity is one-party rule. The change is the retreat from Maoist economics. Treating reform as either “China became the United States” or “nothing changed” misses the combination.',
        traps: [
          null,
          'The monarchy was not restored.',
          'China was not a Warsaw Pact member.',
          'Industry expanded under reform.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'The Soviet war in Afghanistan (1979–1989) and the U.S. war in Vietnam are comparable as Cold War conflicts because both',
        choices: [
          'were proxy or direct superpower interventions that failed to secure a lasting client state and damaged the intervening power at home',
          'were fought by the Mongol Empire',
          'ended with the intervening superpower annexing the country as a province',
          'occurred in the sixteenth century'
        ],
        answer: 0,
        why: 'The comparison is not that the wars were identical. It is that each superpower met a nationalist war it could not close, and paid a political price.',
        traps: [
          null,
          'Wrong empire.',
          'Neither annexation happened.',
          'Both are late twentieth century.'
        ]
      },
      {
        skill: 'Argument',
        stem: 'Which claim about decolonization is the most historically careful?',
        choices: [
          'European empires ended through nationalist movements, international pressure, and changing costs, and the new states inherited borders and economies that still constrained them',
          'Every colony became a wealthy democracy in the first year of independence',
          'Decolonization was completed by the Congress of Vienna',
          'No violence accompanied any independence'
        ],
        answer: 0,
        why: 'Careful claims include the win and the constraint. Borders drawn in the colonial period and export economies did not vanish with the flag.',
        traps: [
          null,
          'Outcomes varied, and many states faced poverty, coups, or civil war.',
          'Vienna is 1815, and it defended empire.',
          'Algeria, Vietnam, Kenya, and partition in South Asia are counterexamples.'
        ]
      }
    ]
  },
  {
    id: 9,
    name: 'Globalization',
    years: 'c. 1900–present',
    strayer: 'Chapters 13 and 14',
    blurb: 'Technology, the world economy, migration, culture, and the environment.',
    questions: [
      {
        skill: 'Causation',
        stem: 'Container shipping and cheap air travel accelerated globalization after 1950 mainly because they',
        choices: [
          'cut the cost of moving goods and people, which thickened trade, migration, and tourism',
          'ended all international trade',
          'restored the Silk Road caravans as the main way to move computers',
          'were invented by the Abbasid caliphate'
        ],
        answer: 0,
        why: 'Strayer’s “acceleration” is a cost story. When distance gets cheaper, the older networks scale up. They do not change their moral character by themselves.',
        traps: [
          null,
          'The opposite result.',
          'The technology replaced, rather than restored, caravan carriage for modern goods.',
          'Wrong century.'
        ]
      },
      {
        skill: 'Context',
        stem: 'The institutions created at Bretton Woods in 1944, including the World Bank and the International Monetary Fund, belong in the context of',
        choices: [
          'an attempt by the wartime Allies to stabilize currencies and rebuild trade after the Depression and the war',
          'the Mongol kuriltai',
          'the Council of Nicaea',
          'the partition of Africa at Berlin'
        ],
        answer: 0,
        why: 'Bretton Woods is a response to the 1930s, when currency wars and collapsed trade made the Depression worse. Later critics argued the same institutions constrained poor countries. Both facts can be true.',
        traps: [
          null,
          'Wrong institution and century.',
          'A fourth-century church council.',
          'Berlin is 1884–85, a different international meeting.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'Critics and defenders of late-twentieth-century economic globalization disagree most fundamentally about whether',
        choices: [
          'deeper trade and foreign investment raise living standards overall or concentrate gains and leave labor and the environment unprotected',
          'the earth is round',
          'the printing press exists',
          'the Haitian Revolution happened'
        ],
        answer: 0,
        why: 'The debate is about distribution and power, not about whether trade exists. A strong answer names who gains and who is exposed.',
        traps: [
          null,
          'Not the historical disagreement.',
          'Not the historical disagreement.',
          'Not the historical disagreement.'
        ]
      },
      {
        skill: 'Process',
        stem: 'The Green Revolution of the mid-twentieth century is best described as',
        choices: [
          'the spread of new wheat and rice varieties, fertilizers, and irrigation that raised yields and also increased dependence on inputs farmers had to buy',
          'a peasant revolt in medieval England',
          'the environmental movement’s founding in 1200',
          'a ban on all fertilizer'
        ],
        answer: 0,
        why: 'Yields went up and hunger fell in several regions. The same package favored farmers who could buy seed, water, and chemicals, which is the limit inside the success.',
        traps: [
          null,
          'Wrong event. The English Peasants’ Revolt is 1381.',
          'Modern environmentalism is a twentieth-century movement.',
          'The package depended on fertilizer. It did not ban it.'
        ]
      },
      {
        skill: 'Causation',
        stem: 'Which pairing best explains a major late-twentieth-century migration pattern?',
        choices: [
          'Labor demand in wealthy economies and violence or poverty in sending regions, together with cheaper transport',
          'The Black Death’s arrival in 1348 as the cause of migration to the Gulf after 1973',
          'A Ming law requiring all Chinese families to move to Paris',
          'The end of the monsoon winds'
        ],
        answer: 0,
        why: 'Migration in this unit is push plus pull plus the technology that makes the trip possible. A single cause from 1348 does not explain guest workers in the 1970s.',
        traps: [
          null,
          'The dates do not connect as cause and effect.',
          'There was no such law.',
          'Monsoons did not stop, and modern migration is not sail-driven.'
        ]
      },
      {
        skill: 'Claims',
        stimulus: 'Written for this drill. An epidemiologist in 1985 writes that a new immune disease is appearing in several countries at once and that air routes, not a single nation’s border policy, explain the pattern of first reports.',
        stem: 'The note best supports the claim that',
        choices: [
          'late-twentieth-century disease moved on the same transportation networks as people and goods',
          'disease had never crossed a border before 1985',
          'the author is describing the Columbian exchange',
          'borders successfully contained every pathogen after 1945'
        ],
        answer: 0,
        why: 'HIV’s spread is Strayer’s modern version of an old theme: connection moves microbes. The claim is not that earlier pandemics never happened.',
        traps: [
          null,
          'The Black Death and the Columbian exchange are earlier counterexamples.',
          'The date and the air routes place it in the late twentieth century.',
          'The note says the opposite about containment.'
        ]
      },
      {
        skill: 'Sourcing',
        stimulus: 'Written for this drill. A clothing-brand advertisement from 2005 shows workers in a bright factory and the slogan “a global family.” It was produced by the brand’s marketing office.',
        stem: 'The advertisement is best used as evidence of',
        choices: [
          'the image of globalization the firm wants consumers to hold',
          'verified wages and union rights in every factory that sews the brand',
          'a United Nations treaty',
          'conditions in a Manchester mill in 1820'
        ],
        answer: 0,
        why: 'Purpose is the whole document. It can start a question about supply chains. It cannot answer that question by itself.',
        traps: [
          null,
          'Marketing is not an audit.',
          'It is not a treaty.',
          'Wrong century. The industrial conditions of 1820 are a different source base.'
        ]
      },
      {
        skill: 'Continuity and change',
        stem: 'Which statement best describes culture under late-twentieth-century globalization?',
        choices: [
          'American and other commercial cultures spread widely, and local religions and identities adapted, resisted, and reused those forms rather than simply disappearing',
          'All local religions ended by 1990',
          'No music, film, or dress crossed a border',
          'Cultural change stopped after the invention of radio'
        ],
        answer: 0,
        why: 'Strayer’s examples, from religious revival to local versions of global commodities, are arguments against both “nothing changed” and “everything became the same.”',
        traps: [
          null,
          'Religious movements, including political Islam, grew in the same decades.',
          'The opposite is the historical fact.',
          'Radio was an early accelerator, not an ending.'
        ]
      },
      {
        skill: 'Argument',
        stem: 'A historically defensible claim about climate change in this unit would be that',
        choices: [
          'industrial fossil-fuel use since the nineteenth century, accelerated in the twentieth, raised greenhouse-gas concentrations, and the costs fall unevenly on countries that emitted less',
          'climate has never changed in human history',
          'only volcanoes in the thirteenth century explain warming measured after 1950',
          'the Little Ice Age was caused by internet use'
        ],
        answer: 0,
        why: 'The claim has a mechanism, a period, and an inequality. The wrong choices either deny the record or scramble the chronology.',
        traps: [
          null,
          'The Little Ice Age and earlier variations are real, which is why the modern claim has to be specific about fossil fuels.',
          'Thirteenth-century volcanoes do not explain the post-1950 instrumental record.',
          'The Little Ice Age predates the internet by centuries.'
        ]
      },
      {
        skill: 'Comparison',
        stem: 'The Iranian Revolution of 1979 and late-twentieth-century environmental movements are comparable in only this limited way:',
        choices: [
          'both rejected a version of modernity imposed from above, one in the name of political Islam and the other in the name of ecological limits',
          'both were led by the Qing emperor',
          'both restored the Abbasid caliphate',
          'both were identical movements with the same theology'
        ],
        answer: 0,
        why: 'A comparison can be narrow and still be real. The shared move is a critique of a development model. The content of the critique is different, and saying they are the same movement is the trap.',
        traps: [
          null,
          'Wrong ruler and century.',
          'Environmental movements did not restore a caliphate, and 1979 Iran established a new Islamic republic, not the Abbasid state.',
          'The question asks for a limited comparison. Identity is too strong.'
        ]
      }
    ]
  }
];
