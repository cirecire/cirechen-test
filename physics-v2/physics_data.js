// Physics course data — Shenzhen Gr.8 (PEP 2024). Engine: physics_chapter.html
// All videos are Khan Academy videos on YouTube — online, works anywhere.
// coverage: g = Khan video+exercise | b = Khan video only | p = custom only
var PHY_DATA = [
{ id:'Ch01_机械运动', unit:'第一章', grade:'八年级上册', coverage:'b',
  title:'Ch01 机械运动 · Mechanical Motion',
  think:'A car drives 60 km in 1 hour, then 60 km in the next hour. Another car drives 120 km in 2 hours. Which car is going faster — or are they the same speed? How do you know?',
  videos:[{"t": "Introduction to Physics", "url": "https://www.youtube.com/watch?v=uIojjqSm0m4"}, {"t": "Distance and Displacement Introduction", "url": "https://www.youtube.com/watch?v=vQCkYm3v3aA"}, {"t": "Distance and Displacement in One Dimension", "url": "https://www.youtube.com/watch?v=w2mbvtpQKrM"}, {"t": "Average Speed and Velocity", "url": "https://www.youtube.com/watch?v=a451lmDKv9w"}, {"t": "Acceleration", "url": "https://www.youtube.com/watch?v=JSPwCtIPfQw"}, {"t": "Falling Objects", "url": "https://www.youtube.com/watch?v=wf8SYTb4r-g"}, {"t": "Free Fall", "url": "https://www.youtube.com/watch?v=BVgemK1Y2wA"}],
  notes:[
    'A <span class="gloss">reference frame（参照物）</span> is what you compare motion to. Same motion looks different from different frames.',
    '<span class="gloss">Distance（路程）</span> = total path length (scalar). <span class="gloss">Displacement（位移）</span> = straight-line from start to end (vector). Displacement can be negative.',
    'Speed is scalar (just a number). <span class="gloss">Velocity（速度）</span> is vector — it has direction: v = s/t in m/s. <b>1 m/s = 3.6 km/h.</b>',
    '<span class="gloss">Acceleration（加速度）</span> a = Δv/Δt. Slowing down is negative acceleration (deceleration). Units: m/s².',
    'In free fall near Earth: g = 9.8 m/s² (downward). s = ½gt², v = gt. All objects fall at the same rate in vacuum.',
    '<b>Unit trap:</b> watch km↔m, h↔s. Convert everything to m and s <i>before</i> plugging into formulas.',
    '<b>s-t graph:</b> slope = velocity. <b>v-t graph:</b> slope = acceleration; area = displacement.'
  ],
  practice:[
    {q:'A runner covers 400 m in 50 s on a circular track. What is the runner\'s average speed?', type:'mc', opts:[{v:'A',t:'8 m/s'},{v:'B',t:'0.125 m/s'},{v:'C',t:'50 m/s'},{v:'D',t:'8 km/h'}], ans:'A', sol:'Average speed = total distance / time = 400 m / 50 s = 8 m/s. Note: 400 m is the distance run, not displacement (which is 0 on a circular track).'},
    {q:'A train is 200 m long. It passes a platform 400 m long in 30 s. What is the train\'s speed in m/s?', type:'fill', ans:'20', sol:'Distance = train length + platform = 200 + 400 = 600 m. Speed = 600 m / 30 s = 20 m/s.'},
    {q:'Which s-t graph shows an object moving at constant velocity?', type:'mc', opts:[{v:'A',t:'A straight line through the origin'},{v:'B',t:'A curved line'},{v:'C',t:'A horizontal line'},{v:'D',t:'A line going downward'}], ans:'A', sol:'A straight line through origin = constant slope = constant velocity. Horizontal line = object at rest. Curved line = changing velocity.'},
    {q:'Fill: to convert 72 km/h to m/s: 72 ÷ ________ = 20 m/s. (or 72 × ________ = 20 m/s)', type:'fill', ans:'3.6', sol:'1 m/s = 3.6 km/h. So 72 km/h ÷ 3.6 = 20 m/s. Or: 72 × (1000/3600) = 72 × (1/3.6) = 20 m/s.'},
    {q:'An object starts from rest and falls freely for 3 s. Approximately how far does it fall? (g = 10 m/s²)', type:'mc', opts:[{v:'A',t:'15 m'},{v:'B',t:'30 m'},{v:'C',t:'45 m'},{v:'D',t:'9.8 m'}], ans:'C', sol:'s = ½gt² = ½ × 10 × 3² = ½ × 10 × 9 = 45 m. Common mistakes: s = gt² = 90 m or s = vt = 30 m.'}
  ],
  quiz:[
    {q:'A cyclist rides 10 km north in 30 min, then 10 km south in 30 min. What is the average speed?', type:'mc', opts:[{v:'A',t:'20 km/h'},{v:'B',t:'10 km/h'},{v:'C',t:'0 km/h'},{v:'D',t:'5 km/h'}], ans:'A', sol:'Average speed = total distance / total time = 20 km / 1 h = 20 km/h. Average velocity (vector) = 0 km/h (net displacement = 0).'},
    {q:'Fill: the slope of a velocity-time graph represents ________ (acceleration / 加速度).', type:'fill', ans:'acceleration', sol:'Slope of v-t graph = Δv/Δt = acceleration. Area under v-t graph = displacement.'},
    {q:'A car traveling at 20 m/s brakes to a stop in 4 s. What is the acceleration?', type:'mc', opts:[{v:'A',t:'+5 m/s²'},{v:'B',t:'−5 m/s²'},{v:'C',t:'−20 m/s²'},{v:'D',t:'+20 m/s²'}], ans:'B', sol:'a = (v₂ − v₁) / Δt = (0 − 20) / 4 = −20/4 = −5 m/s². Negative because the car is decelerating.'}
  ]
},
{ id:'Ch02_声现象', unit:'第二章', grade:'八年级上册', coverage:'b',
  title:'Ch02 声现象 · Sound',
  think:'Why can you hear someone speaking around a corner, even though you cannot see them? And why does the siren of an ambulance sound different when it approaches you vs when it passes by?',
  videos:[{"t": "Speed of Sound", "url": "https://www.youtube.com/watch?v=UgE2GIQwUCw"}, {"t": "Relative Speed of Sound", "url": "https://www.youtube.com/watch?v=yF4cvbAYjwI"}, {"t": "Production of Sound", "url": "https://www.youtube.com/watch?v=nGKffdaI4Pg"}, {"t": "Equation of a Wave", "url": "https://www.youtube.com/watch?v=9WZM68aVnGk"}, {"t": "Wave Speed", "url": "https://www.youtube.com/watch?v=c38H6UKt3_I"}, {"t": "Supplement Decibel Scale", "url": "https://www.youtube.com/watch?v=_p-WyPg1sbU"}, {"t": "Supplement Sound Gets Softer", "url": "https://www.youtube.com/watch?v=46V8qqVRirk"}, {"t": "Supplement Loudness Pitch", "url": "https://www.youtube.com/watch?v=eA19gFOH1JA"}],
  notes:[
    'Sound is a <span class="gloss">longitudinal wave（纵波）</span> — particles vibrate <i>parallel</i> to the direction of energy transfer.',
    'Compression = crowded particles; rarefaction = spread-out particles. Sound needs a <span class="gloss">medium（介质）</span> — it cannot travel in vacuum.',
    '<span class="gloss">Pitch（音调）</span> = how high/low (determined by frequency f, in Hz). <span class="gloss">Loudness（响度）</span> = how loud (determined by amplitude).',
    'Speed of sound in air ≈ 340 m/s (at 15°C). Speed increases in liquids and solids.',
    'v = fλ: wave speed = frequency × wavelength. Both f and λ can change independently, but v is fixed by the medium.',
    '<span class="gloss">Doppler effect（多普勒效应）</span>: pitch appears higher when source approaches, lower when it recedes.',
    'Noise control: reduce at source, block the path, protect the receiver.'
  ],
  practice:[
    {q:'Fill: the frequency of a sound wave is 500 Hz. If the speed of sound is 340 m/s, the wavelength is ________ m.', type:'fill', ans:'0.68', sol:'λ = v/f = 340/500 = 0.68 m.'},
    {q:'Why can sound not travel through space?', type:'mc', opts:[{v:'A',t:'Space is too cold'},{v:'B',t:'There is no medium in space'},{v:'C',t:'Sound is too weak in space'},{v:'D',t:'Space absorbs sound waves'}], ans:'B', sol:'Sound needs a medium (solid, liquid, gas) to propagate. Space is a vacuum — no particles to carry the wave.'}
  ],
  quiz:[
    {q:'An ambulance siren changes from 400 Hz to 360 Hz as it passes you. The sound is:', type:'mc', opts:[{v:'A',t:'getting louder'},{v:'B',t:'getting quieter'},{v:'C',t:'shifting to a lower pitch'},{v:'D',t:'shifting to a higher pitch'}], ans:'C', sol:'As the ambulance moves away, the wavefronts are stretched → frequency decreases → lower pitch. This is the Doppler effect.'},
    {q:'Fill: loudness is determined by the ________ of the sound wave.', type:'fill', ans:'amplitude', sol:'Pitch is determined by frequency. Loudness is determined by amplitude (bigger vibration = louder sound).'},
    {q:'Sound travels fastest in:', type:'mc', opts:[{v:'A',t:'Air'},{v:'B',t:'Water'},{v:'C',t:'Steel'},{v:'D',t:'Vacuum'}], ans:'C', sol:'Particles are closest together in solids. Sound speed: steel > water > air > vacuum (no sound in vacuum).'}
  ]
},
{ id:'Ch03_物态变化', unit:'第三章', grade:'八年级上册', coverage:'b',
  title:'Ch03 物态变化 · Phase Changes',
  think:'Water can be ice, liquid water, or steam — all made of the same H₂O molecules. What changes when water changes state? Is it the molecules themselves, or something about how they move and pack together?',
  videos:[{"t": "Effect of Heat and Temperature", "url": "https://www.youtube.com/watch?v=ia1stqy4Yko"}, {"t": "Specific Heat and Latent Heat", "url": "https://www.youtube.com/watch?v=zz4KbvF_X-0"}, {"t": "Supplement Changing States Part1", "url": "https://www.youtube.com/watch?v=KrR3VPGt6BY"}, {"t": "Supplement Changing States Part2", "url": "https://www.youtube.com/watch?v=4kT_dN1rVhI"}, {"t": "Supplement Sublimation", "url": "https://www.youtube.com/watch?v=c7EuQrvXtDU"}, {"t": "Supplement Effect Temp Pressure", "url": "https://www.youtube.com/watch?v=gx0vGzZfuOQ"}, {"t": "Supplement Evaporation Boiling", "url": "https://www.youtube.com/watch?v=-R411S98xX4"}, {"t": "Supplement Evaporation Cooling", "url": "https://www.youtube.com/watch?v=RtzzCrfZAL8"}],
  notes:[
    'Three states of matter: <span class="gloss">solid（固态）</span> — fixed shape & volume; <span class="gloss">liquid（液态）</span> — fixed volume, takes container shape; <span class="gloss">gas（气态）</span> — fills container completely.',
    'Phase changes: melting（熔化）/ freezing（凝固）; boiling（沸腾）/ condensing（液化）; sublimation（升华）: solid → gas without becoming liquid.',
    '<span class="gloss">Latent heat（潜热）</span>: energy absorbed/released during phase change without temperature change. Q = mL.',
    'Heating/cooling: Q = mcΔT. Specific heat capacity c is different for each substance. Water c = 4200 J/(kg·°C) — very high!',
    '<b>Melting point（熔点）</b> = freezing point. <b>Boiling point（沸点）</b> = condensation point. At these temperatures, temperature stays constant during phase change.',
    'Evaporation（蒸发） happens at the surface, at any temperature. Boiling（沸腾） happens throughout the liquid at the boiling point.',
    '<b>Six phase changes:</b> 熔化↑吸热 / 凝固↓放热 / 汽化↑吸热 / 液化↓放热 / 升华↑吸热 / 凝华↓放热'
  ],
  practice:[
    {q:'Which phase change is solid → gas without becoming liquid?', type:'mc', opts:[{v:'A',t:'Boiling'},{v:'B',t:'Evaporation'},{v:'C',t:'Sublimation（升华）'},{v:'D',t:'Condensation'}], ans:'C', sol:'Sublimation: solid directly to gas. Examples: dry ice (CO₂), iodine, mothballs.'},
    {q:'Fill: when ice at 0°C melts into water at 0°C, the temperature stays at 0°C because the heat energy is used to ________ the solid structure.', type:'fill', ans:'break down', sol:'During phase change, temperature stays constant. The heat (latent heat of fusion) is used to break the solid structure, not raise temperature.'},
    {q:'100 g of water is heated from 20°C to 70°C. How much heat is absorbed? (c_water = 4.2 J/(g·°C))', type:'mc', opts:[{v:'A',t:'21000 J'},{v:'B',t:'4200 J'},{v:'C',t:'29400 J'},{v:'D',t:'8400 J'}], ans:'A', sol:'Q = mcΔT = 100 × 4.2 × (70−20) = 420 × 50 = 21000 J. Common mistake: forgetting to multiply by ΔT = 50°C.'}
  ],
  quiz:[
    {q:'Which of the following absorbs heat?', type:'mc', opts:[{v:'A',t:'Condensation'},{v:'B',t:'Freezing'},{v:'C',t:'Melting（熔化）'},{v:'D',t:'Solidification'}], ans:'C', sol:'Melting, evaporation, sublimation = all absorb heat (endothermic). Condensation, freezing, deposition = all release heat (exothermic).'},
    {q:'Fill: the boiling point of water decreases when atmospheric pressure decreases. At high altitude, water boils at ________ 100°C.', type:'fill', ans:'below', sol:'Lower pressure = lower boiling point. That is why cooking takes longer at high altitude — water boils at lower temperature.'},
    {q:'A piece of camphor (樟脑) left in the open gets smaller over time. This is an example of:', type:'mc', opts:[{v:'A',t:'Evaporation'},{v:'B',t:'Sublimation（升华）'},{v:'C',t:'Boiling'},{v:'D',t:'Condensation'}], ans:'B', sol:'Camphor goes from solid directly to gas (sublimation) — it disappears without melting first.'}
  ]
},
{ id:'Ch04_光现象', unit:'第四章', grade:'八年级上册', coverage:'b',
  title:'Ch04 光现象 · Light',
  think:'You can see yourself in a flat mirror. But the image is NOT at the mirror surface — it seems to be <i>behind</i> the mirror. Why? And why does your left hand appear as a right hand in the mirror?',
  videos:[{"t": "Reflection Laws and Ray Diagrams", "url": "https://www.youtube.com/watch?v=uCJpIudI9W8"}, {"t": "Mirror Ray Diagrams", "url": "https://www.youtube.com/watch?v=OHXOwz1NLh0"}, {"t": "Total Internal Reflection", "url": "https://www.youtube.com/watch?v=WRuatAcd2WY"}, {"t": "Refraction of Light", "url": "https://www.youtube.com/watch?v=LKI1UmFbfaA"}, {"t": "Supplement Dispersion Rainbows", "url": "https://www.youtube.com/watch?v=fywXvl38Va0"}, {"t": "Supplement Dispersion", "url": "https://www.youtube.com/watch?v=HRuLhY0NAMI"}, {"t": "Supplement Light Travels Straight", "url": "https://www.youtube.com/watch?v=EasN5Z8kElg"}],
  notes:[
    'Light travels in straight lines (<span class="gloss">光的直线传播</span>). Shadow and eclipse prove this.',
    '<span class="gloss">Law of reflection（反射定律）</span>: angle of incidence = angle of reflection, both measured from the normal (法线).',
    '<span class="gloss">Plane mirror（平面镜）</span>: image is the same distance behind the mirror as the object is in front. Image is virtual (虚像) — cannot be projected on a screen.',
    '<span class="gloss">Refraction（折射）</span>: light bends when passing from one medium to another. Bends toward the normal when slowing down (e.g., air → glass).',
    '<span class="gloss">Dispersion（色散）</span>: white light splits into colors (红橙黄绿蓝靛紫) because different wavelengths refract at different angles.',
    '<b>Critical angle（临界角）</b>: when angle of incidence exceeds this, total internal reflection occurs — used in optical fibres.',
    '<b>Three properties of plane mirror image:</b> 大小相等 / 正立 / 虚像。物距 = 像距。'
  ],
  practice:[
    {q:'A candle is placed 10 cm in front of a plane mirror. The image appears:', type:'mc', opts:[{v:'A',t:'10 cm behind the mirror'},{v:'B',t:'20 cm behind the mirror'},{v:'C',t:'10 cm in front of the mirror'},{v:'D',t:'20 cm in front of the mirror'}], ans:'A', sol:'Plane mirror: image distance = object distance. Candle 10 cm in front → image 10 cm behind the mirror.'},
    {q:'Fill: when light goes from air into glass, it slows down and bends ________ the normal.', type:'fill', ans:'toward', sol:'Light bends toward the normal when entering a denser (slower) medium. Bends away from normal when entering a rarer medium.'},
    {q:'Which color of light has the shortest wavelength?', type:'mc', opts:[{v:'A',t:'Red'},{v:'B',t:'Yellow'},{v:'C',t:'Green'},{v:'D',t:'Violet（紫光）'}], ans:'D', sol:'Violet has the shortest wavelength and highest frequency in visible light. Red has the longest wavelength and lowest frequency.'}
  ],
  quiz:[
    {q:'The angle of incidence is 30°. What is the angle of reflection?', type:'mc', opts:[{v:'A',t:'30°'},{v:'B',t:'60°'},{v:'C',t:'90°'},{v:'D',t:'150°'}], ans:'A', sol:'Law of reflection: angle of incidence = angle of reflection. Both measured from the normal line, not from the mirror surface.'},
    {q:'Fill: in a plane mirror, the image is laterally inverted — your left hand appears as your right hand. This means the image is flipped along the ________ axis.', type:'fill', ans:'depth', sol:'Lateral inversion: left-right flip along the depth (front-back) axis, not along the left-right axis. Think: your left points to the mirror, your reflection\'s left also points to the mirror.'},
    {q:'Which phenomenon explains why the sky is blue?', type:'mc', opts:[{v:'A',t:'Reflection'},{v:'B',t:'Refraction'},{v:'C',t:'Scattering（散射）'},{v:'D',t:'Dispersion'}], ans:'C', sol:'Rayleigh scattering: shorter wavelengths (blue) scatter more than longer wavelengths (red) in the atmosphere, making the sky blue.'}
  ]
},
{ id:'Ch05_透镜', unit:'第五章', grade:'八年级上册', coverage:'b',
  title:'Ch05 透镜 · Lenses',
  think:'A magnifying glass can make things look bigger when held close, but make them look smaller when held far away. How is that possible? What determines whether a lens makes an image bigger or smaller?',
  videos:[{"t": "Convex Lenses", "url": "https://www.youtube.com/watch?v=K0sjZ5nqQ7g"}, {"t": "Thin Lens Equation", "url": "https://www.youtube.com/watch?v=7GV1UZSTNJg"}, {"t": "Concave Lenses", "url": "https://www.youtube.com/watch?v=Vh70PyitQzo"}, {"t": "Object Image Distance Relationship", "url": "https://www.youtube.com/watch?v=acQYX4nwhCk"}, {"t": "Focal Distance Formula Proof", "url": "https://www.youtube.com/watch?v=rse0I7rZ8jM"}, {"t": "Supplement Parts of Eye", "url": "https://www.youtube.com/watch?v=7HGxjs_aYyg"}, {"t": "Supplement Defects of Vision", "url": "https://www.youtube.com/watch?v=8WUEnoxUw6Y"}],
  notes:[
    '<span class="gloss">Convex lens（凸透镜）</span>: converges light (会聚). Thicker in middle. Used to correct far-sightedness (远视).',
    '<span class="gloss">Concave lens（凹透镜）</span>: diverges light (发散). Thinner in middle. Used to correct near-sightedness (近视).',
    '<b>Key distances:</b> u = object distance (物距), v = image distance (像距), f = focal length (焦距).',
    '1/f = 1/u + 1/v (for thin convex lens).',
    '<b>Convex lens imaging rules:</b> u > 2f →缩小倒立实像; f < u < 2f →放大倒立实像; u = f → no image; u < f →放大正立虚像.',
    '<b>Camera（照相机）</b>: u > 2f → image on film/sensor, smaller than object. <b>Projector（投影仪）</b>: f < u < 2f → image larger.',
    '<b>Eye:</b> ciliary muscles change lens shape to focus on near/far objects. Near-sightedness: image forms in front of retina（视网膜）.'
  ],
  practice:[
    {q:'An object is placed 30 cm from a convex lens with focal length 10 cm. Where is the image formed?', type:'mc', opts:[{v:'A',t:'10 cm from the lens'},{v:'B',t:'15 cm from the lens'},{v:'C',t:'20 cm from the lens'},{v:'D',t:'At infinity'}], ans:'B', sol:'1/v = 1/f − 1/u = 1/10 − 1/30 = (3−1)/30 = 2/30 → v = 15 cm. Since u > f and u > 2f? No — u=30cm, 2f=20cm, so u>2f → image is real, inverted, smaller, on the other side.'},
    {q:'Fill: a concave lens always produces a ________ (virtual / real) image.', type:'fill', ans:'virtual', sol:'Concave lens diverges light rays — they appear to come from a point on the same side as the object. Virtual images cannot be projected on a screen.'},
    {q:'A magnifying glass produces a larger, upright image. The object must be:', type:'mc', opts:[{v:'A',t:'Beyond 2f'},{v:'B',t:'At exactly 2f'},{v:'C',t:'Between f and 2f'},{v:'D',t:'Closer than f'}], ans:'D', sol:'When object is closer than f (within focal length) of a convex lens, the image is virtual, upright, and magnified. This is how a magnifying glass works.'}
  ],
  quiz:[
    {q:'For a near-sighted person, the image of a distant object forms in front of the retina. Which lens is used to correct this?', type:'mc', opts:[{v:'A',t:'Convex lens'},{v:'B',t:'Concave lens（凹透镜）'},{v:'C',t:'Plane mirror'},{v:'D',t:'No lens needed'}], ans:'B', sol:'Concave lens diverges light before it enters the eye, pushing the focus point back to the retina.'},
    {q:'Fill: the focal length of a lens depends on the curvature of the lens surface and the ________ of the lens material.', type:'fill', ans:'refractive index', sol:'Thicker curvature = shorter focal length. Higher refractive index = shorter focal length. Both affect how strongly the lens bends light.'},
    {q:'When an object moves from infinity toward a convex lens, the image:', type:'mc', opts:[{v:'A',t:'Always gets larger'},{v:'B',t:'Always gets smaller'},{v:'C',t:'Changes from real to virtual at u=f'},{v:'D',t:'Stays the same size'}], ans:'C', sol:'At u=f, no image forms. As u decreases below f, a virtual, upright, magnified image forms — this is the magnifying glass.'}
  ]
},
{ id:'Ch06_质量密度', unit:'第六章', grade:'八年级上册', coverage:'p',
  title:'Ch06 质量与密度 · Mass & Density',
  think:'A 1 kg block of iron and a 1 kg block of wood have the same mass. But they are clearly different sizes. Why? If you dropped them both in water, would they both float?',
  videos:[{"t": "Fluids and Density", "url": "https://www.youtube.com/watch?v=AJxYCosjRH0"}, {"t": "Supplement Volume Displacement", "url": "https://www.youtube.com/watch?v=3dYTaAHYLH0"}, {"t": "Supplement Specific Gravity", "url": "https://www.youtube.com/watch?v=nVPrWz8Jfgo"}, {"t": "Supplement Displaced Liquid Mass", "url": "https://www.youtube.com/watch?v=3mWV4hrE8H8"}],
  notes:[
    '<span class="gloss">Mass（质量）</span> m — amount of matter, constant everywhere. <span class="gloss">Weight（重力）</span> W = mg — force, changes with gravity.',
    'Mass is measured with a <span class="gloss">balance（天平）</span> (comparing to standard masses). Weight is measured with a spring scale.',
    '<span class="gloss">Density（密度）</span> ρ = m/V. Units: g/cm³ or kg/m³. <b>1 g/cm³ = 1000 kg/m³.</b>',
    '<b>Water density = 1 g/cm³</b> = 1000 kg/m³. Objects with ρ > water sink; ρ < water float.',
    '<b>Measuring irregular solid volume:</b> water displacement method. V = V₂ − V₁.',
    '<b>Unit conversions:</b> 1 L = 1000 mL = 1000 cm³ = 0.001 m³. 1 m³ = 10⁶ cm³.',
    '<b>Mixture density:</b> ρ_mix = total mass / total volume. Not the average of individual densities!'
  ],
  practice:[
    {q:'A metal block has mass 780 g and volume 100 cm³. What is its density in g/cm³? Is it likely iron (ρ = 7.8 g/cm³)?', type:'fill', ans:'7.8', sol:'ρ = m/V = 780/100 = 7.8 g/cm³. Yes, this matches iron (ρ = 7.8 g/cm³).'},
    {q:'Which has greater density?', type:'mc', opts:[{v:'A',t:'1 kg of iron'},{v:'B',t:'1 kg of water'},{v:'C',t:'They are equal'},{v:'D',t:'Cannot determine'}], ans:'A', sol:'Density = m/V. Iron: V = 1 kg / 7.8 g/cm³ ≈ 128 cm³. Water: V = 1 kg / 1 g/cm³ = 1000 cm³. Same mass, much smaller volume → iron has greater density (7.8 g/cm³ > 1 g/cm³).'},
    {q:'Fill: an object floats in water with 30% of its volume above water. The density of the object is ________ g/cm³.', type:'fill', ans:'0.7', sol:'Floating: ρ_object = (submerged fraction) × ρ_water = 0.7 × 1 = 0.7 g/cm³.'}
  ],
  quiz:[
    {q:'A hollow iron ball has a large empty cavity inside. Compared to a solid iron ball of the same mass, this ball has:', type:'mc', opts:[{v:'A',t:'Greater density'},{v:'B',t:'Same density'},{v:'C',t:'Smaller density（密度更小）'},{v:'D',t:'Cannot determine'}], ans:'C', sol:'Density = m/V. Hollow ball has same mass but larger volume (cavity included). So density = m/(V_solid + V_cavity) < m/V_solid. Same material = same density only when solid.'},
    {q:'Fill: 5 L of oil has mass 4 kg. The density of oil is ________ kg/m³.', type:'fill', ans:'800', sol:'5 L = 0.005 m³. ρ = 4 kg / 0.005 m³ = 800 kg/m³. Or: 4 kg / 5000 cm³ = 0.0008 kg/cm³ = 800 kg/m³.'},
    {q:'Which of the following is a correct method to measure the volume of an irregular stone?', type:'mc', opts:[{v:'A',t:'Weigh it on a scale'},{v:'B',t:'Use water displacement'},{v:'C',t:'Put it in sunlight'},{v:'D',t:'Use a ruler to measure its sides'}], ans:'B', sol:'Water displacement (排水法): submerge the stone in water, measure the volume of water displaced. Works for irregularly shaped objects.'}
  ]
},
{ id:'Ch07_力', unit:'第七章', grade:'八年级下册', coverage:'g',
  title:'Ch07 力 · Force',
  think:'You push a heavy box across the floor at constant speed. It doesn\'t accelerate — it just keeps moving at the same speed. But you\'re clearly applying a force. Where does that force "go"? Why doesn\'t the box keep speeding up forever?',
  videos:[{"t": "Newtons First Law", "url": "https://www.youtube.com/watch?v=rjkQcfw5fkM"}, {"t": "More on Newtons First Law", "url": "https://www.youtube.com/watch?v=CQYELiTtUs8"}, {"t": "Newtons Second Law", "url": "https://www.youtube.com/watch?v=Ee6CHn0MRKE"}, {"t": "Newtons Third Law", "url": "https://www.youtube.com/watch?v=J8mLQQZeIH8"}, {"t": "Normal Force in Elevator", "url": "https://www.youtube.com/watch?v=hoRsHNSrMpc"}, {"t": "Static and Kinetic Friction", "url": "https://www.youtube.com/watch?v=ZA_D4O6l1lo"}, {"t": "Inclined Plane Force Components", "url": "https://www.youtube.com/watch?v=TC23wD34C7k"}, {"t": "Ice Accelerating Down Incline", "url": "https://www.youtube.com/watch?v=Mz2nDXElcoM"}, {"t": "Supplement Mass Weight Gravity", "url": "https://www.youtube.com/watch?v=INZNifEXOcQ"}, {"t": "Supplement Centre of Gravity", "url": "https://www.youtube.com/watch?v=4wlEIXGeMFM"}, {"t": "Supplement Balanced Forces", "url": "https://www.youtube.com/watch?v=oNgo9bbDi7Q"}],
  notes:[
    '<span class="gloss">Force（力）</span> F — push or pull, measured in Newtons (N). Three elements: 大小 / 方向 / 作用点.',
    '<span class="gloss">Newton\'s First Law（牛顿第一定律）</span>: an object at rest stays at rest, or moving stays moving, unless acted on by a net force. This is <span class="gloss">inertia（惯性）</span> — resistance to change in motion.',
    '<span class="gloss">Newton\'s Second Law</span>: F = ma. Net force = mass × acceleration. More mass = harder to accelerate (heavier feel).',
    '<span class="gloss">Newton\'s Third Law（牛顿第三定律）</span>: every action has an equal and opposite reaction. Action and reaction act on <i>different</i> objects!',
    '<span class="gloss">Weight（重力）</span> W = mg. g = 9.8 N/kg (on Earth). Weight changes with gravity; mass does not.',
    '<b>Balanced forces（平衡力）</b>: net force = 0. Object at rest or moving at constant velocity. Two forces are balanced when: 等大 + 反向 + 共线 + 同体.',
    '<b>Friction（摩擦力）</span>:</b> f = μN. Static friction (静摩擦) — just starting to move. Kinetic friction (滑动摩擦) — already sliding.'
  ],
  practice:[
    {q:'A 5 kg object is pushed with a net force of 20 N. What is the acceleration?', type:'fill', ans:'4', sol:'F = ma → a = F/m = 20 N / 5 kg = 4 m/s².'},
    {q:'Which pair of forces are a Newton\'s Third Law action-reaction pair?', type:'mc', opts:[{v:'A',t:'Gravity pulling down on a book; the table pushing up on the book'},{v:'B',t:'Gravity pulling down on a book; the book pulling up on the Earth'},{v:'C',t:'Your hand pushing right on a box; friction pushing left on the box'},{v:'D',t:'Normal force up from the table; weight down on the table'}], ans:'B', sol:'Action-reaction: same interaction pair, on two different objects. Gravity from Earth on book (book feels it) ↔ gravity from book on Earth (Earth feels it). Table pushing on book is a different interaction.'},
    {q:'Fill: an object with more mass has ________ (more / less) inertia.', type:'fill', ans:'more', sol:'Inertia = resistance to change in motion. Mass is the quantitative measure of inertia. More mass = harder to accelerate or decelerate.'}
  ],
  quiz:[
    {q:'A 2 kg book sits on a table. What is the normal force from the table on the book?', type:'mc', opts:[{v:'A',t:'0 N'},{v:'B',t:'9.8 N'},{v:'C',t:'19.6 N'},{v:'D',t:'2 N'}], ans:'C', sol:'Balanced forces vertically: Normal force (up) = Weight (down). W = mg = 2 × 9.8 = 19.6 N. So N = 19.6 N up.'},
    {q:'Fill: when a car accelerates forward, the road pushes the car forward. This is an example of the ________ law.', type:'fill', ans:'third', sol:'Third law: road pushes car forward (friction), car pushes road backward (equal and opposite). Net result: car accelerates forward.'},
    {q:'An astronaut has mass 80 kg on Earth. On the Moon, her mass is _______ and her weight is _______.', type:'mc', opts:[{v:'A',t:'80 kg; about 130 N'},{v:'B',t:'13 kg; about 130 N'},{v:'C',t:'80 kg; about 784 N'},{v:'D',t:'8 kg; about 784 N'}], ans:'A', sol:'Mass is the same everywhere (80 kg). Weight = mg. Moon\'s g ≈ 1.6 N/kg, so W_moon = 80 × 1.6 = 128 N ≈ 130 N.'}
  ]
},
{ id:'Ch08_压强', unit:'第八章', grade:'八年级下册', coverage:'p',
  title:'Ch08 压强 · Pressure',
  think:'A sharp knife cuts better than a blunt one — even though you use the same force. Why does the area underneath the blade matter? And why do camels have wide feet while high-heeled shoes have tiny heels?',
  videos:[{"t": "What is Pressure", "url": "https://www.youtube.com/watch?v=zY2QlLzBq94"}, {"t": "Pressure in Liquids", "url": "https://www.youtube.com/watch?v=qq4WW8snlKc"}, {"t": "Supplement Bernoulli Principle", "url": "https://www.youtube.com/watch?v=bKAKOFg5n-E"}, {"t": "Supplement Atmospheric Pressure Barometer", "url": "https://www.youtube.com/watch?v=kkUvU-elGtw"}, {"t": "Fluid Pressure", "url": "https://www.youtube.com/watch?v=p_WLHzF1SdI"}],
  notes:[
    '<span class="gloss">Pressure（压强）</span> p = F/A. Force per unit area. Units: Pa (Pascal) = N/m². 1 kPa = 1000 Pa.',
    '<b>Solid pressure:</b> p = F/A. Same force over smaller area = greater pressure. Sharp knife: small area → big pressure.',
    '<b>Liquid pressure:</b> p = ρgh (does NOT depend on shape of container). Only density and depth matter.',
    '<b>Atmospheric pressure（大气压强）</b>: ≈ 101 kPa at sea level. Decreases with altitude. Measured by mercury barometer.',
    '<span class="gloss">Pascal\'s principle（帕斯卡原理）</span>: pressure applied to an enclosed fluid is transmitted equally to every part of the fluid.',
    '<span class="gloss">Bernoulli\'s principle（伯努利原理）</span>: faster-moving fluid exerts lower pressure. Plane wing lift, spray gun.',
    '<b>Increase/decrease solid pressure:</b> 增大：增大F或减小A。减小：减小F或增大A（如骆驼脚、滑雪板）。'
  ],
  practice:[
    {q:'A 600 N person stands on one foot (area 150 cm²). What pressure is exerted on the floor in Pa?', type:'fill', ans:'40000', sol:'p = F/A. One foot: A = 150 cm² = 0.015 m². F = 600 N. p = 600 / 0.015 = 40,000 Pa = 40 kPa. (On two feet: p = 20 kPa.)'},
    {q:'At what depth in water is the water pressure 2× atmospheric pressure? (ρ_water = 1000 kg/m³, g = 10 N/kg, p_atm = 100 kPa)', type:'mc', opts:[{v:'A',t:'10 m'},{v:'B',t:'20 m（p=ρgh→h=200000/(1000×10)）'},{v:'C',t:'30 m'},{v:'D',t:'40 m'}], ans:'B', sol:'p = ρgh → h = p/(ρg) = 200000/(1000×10) = 20 m. Note: water pressure = 2 atm means p = 200 kPa (not 300 kPa — the question asks water pressure, not total pressure).'},
    {q:'Fill: pressure in a liquid at a given depth acts equally in all ________.', type:'fill', ans:'directions', sol:'Unlike solid pressure (which acts in one direction), liquid pressure acts in all directions at a given depth. This is why a submerged balloon pushes outward in every direction.'}
  ],
  quiz:[
    {q:'Which action would most effectively decrease the pressure of a heavy box on the floor?', type:'mc', opts:[{v:'A',t:'Painting the box'},{v:'B',t:'Placing it on a wide board（增大接触面积）'},{v:'C',t:'Lifting it slightly'},{v:'D',t:'Reducing friction'}], ans:'B', sol:'p = F/A. Painting or lifting doesn\'t change F or A significantly. Placing on a wide board increases contact area → decreases pressure.'},
    {q:'Fill: in a Bernoulli system, where fluid moves faster, the pressure is ________.', type:'fill', ans:'lower', sol:'Bernoulli: P + ½ρv² = constant. When velocity v increases, pressure P decreases. This is why aeroplane wings generate lift.'},
    {q:'Why can\'t a straw work in a perfect vacuum?', type:'mc', opts:[{v:'A',t:'The straw breaks'},{v:'B',t:'There is no atmospheric pressure to push the liquid up'},{v:'C',t:'Gravity pulls the liquid down'},{v:'D',t:'The liquid evaporates'}], ans:'B', sol:'Drinking with a straw: you reduce pressure in your mouth, and atmospheric pressure pushes liquid up the straw. In a vacuum, no atmospheric pressure → no pushing force → liquid won\'t rise.'}
  ]
},
{ id:'Ch09_浮力', unit:'第九章', grade:'八年级下册', coverage:'p',
  title:'Ch09 浮力 · Buoyancy',
  think:'A massive steel ship floats on water even though steel is much denser than water. How is this possible? The steel is solid throughout — why doesn\'t it sink straight to the bottom?',
  videos:[{"t": "Buoyant Force", "url": "https://www.youtube.com/watch?v=NYWG5eXRBFQ"}, {"t": "What is Buoyant Force", "url": "https://www.youtube.com/watch?v=3z8dVupYfAw"}, {"t": "Archimedes Principle", "url": "https://www.youtube.com/watch?v=zSN5-kmKXRM"}, {"t": "Archimedes Principle and Buoyancy", "url": "https://www.youtube.com/watch?v=VRXLvJPTV0k"}, {"t": "Supplement Archimedes Principle", "url": "https://www.youtube.com/watch?v=_p-hwElkrlk"}, {"t": "Supplement Buoyancy Floating Conditions", "url": "https://www.youtube.com/watch?v=Pfba_ilpB8U"}],
  notes:[
    '<span class="gloss">Buoyant force（浮力）</span>: upward force from a fluid on a submerged object. Always acts upward (opposite to weight).',
    '<span class="gloss">Archimedes\' principle（阿基米德原理）</span>: F_浮 = ρ_液 × g × V_排. Float or sink depends on V_排 (volume displaced).',
    '<b>Why a steel ship floats:</b> ship\'s hull is mostly air inside. Average density of ship < water density. So the ship floats even though steel itself is denser than water.',
    '<b>Floating/sinking conditions:</b> ρ_object > ρ_fluid → sinks. ρ_object = ρ_fluid → neutral buoyancy. ρ_object < ρ_fluid → floats.',
    '<b>Three states:</b> 上浮 (rising): F_浮 > G. 下沉 (sinking): F_浮 < G. 悬浮 (suspended): F_浮 = G.',
    '<b>Finding density of irregular object:</b> ρ = m/V. Use water displacement to find V. Compare to water density to predict float/sink.',
    '<b>Apparent weight in fluid:</b> apparent weight = true weight − F_浮. In water, objects feel lighter.'
  ],
  practice:[
    {q:'An object has volume 0.002 m³. It is fully submerged in water. What is the buoyant force? (ρ_water = 1000 kg/m³, g = 10 N/kg)', type:'fill', ans:'20', sol:'F_浮 = ρ_液 × g × V_排 = 1000 × 10 × 0.002 = 20 N.'},
    {q:'A wooden block (ρ = 0.6 g/cm³) floats in water. What fraction of the block is submerged?', type:'mc', opts:[{v:'A',t:'0.4'},{v:'B',t:'0.6（60%）'},{v:'C',t:'1.0'},{v:'D',t:'0.3'}], ans:'B', sol:'Floating: F_浮 = G. ρ_water × g × V_排 = ρ_block × V_total × g. V_排/V_total = ρ_block/ρ_water = 0.6/1.0 = 0.6. 60% submerged.'},
    {q:'Fill: the buoyant force acts upward because pressure at the bottom of a submerged object is ________ than pressure at the top.', type:'fill', ans:'greater', sol:'Pressure increases with depth. Bottom pressure × area = larger upward force. Top pressure × area = smaller downward force. Net = buoyant force upward.'}
  ],
  quiz:[
    {q:'An object weighs 30 N in air and 20 N when fully submerged in water. What is the buoyant force?', type:'mc', opts:[{v:'A',t:'30 N'},{v:'B',t:'20 N'},{v:'C',t:'10 N（30−20）'},{v:'D',t:'50 N'}], ans:'C', sol:'Apparent weight = true weight − F_浮. So F_浮 = 30 N − 20 N = 10 N.'},
    {q:'Fill: a hydrometer（比重计） floats in a liquid. The denser the liquid, the ________ it floats (lower / higher) in the liquid.', type:'fill', ans:'higher', sol:'More liquid density → greater buoyant force for same submerged volume → floats higher. A hydrometer is calibrated to read density directly from how high it floats.'},
    {q:'A balloon filled with helium rises in air. This is because:', type:'mc', opts:[{v:'A',t:'Helium is less dense than air（氦气密度小于空气）'},{v:'B',t:'There is no gravity in air'},{v:'C',t:'Helium has negative weight'},{v:'D',t:'Air pushes the balloon upward'}], ans:'A', sol:'Archimedes: F_浮 = ρ_air × g × V_balloon. If ρ_He × V × g + G_balloon < ρ_air × g × V → net upward force. Helium (ρ_He ≈ 0.18 kg/m³) << air (ρ_air ≈ 1.29 kg/m³), so it rises.'}
  ]
},
{ id:'Ch10_功和机械能', unit:'第十章', grade:'八年级下册', coverage:'p',
  title:'Ch10 功和机械能 · Work & Energy',
  think:'A waiter carrying a tray horizontally across a room is doing work on the tray? Your physics teacher says no — but the waiter is clearly exerting effort! What does "work" mean in physics, and why is it different from everyday effort?',
  videos:[{"t": "Introduction to Work and Energy", "url": "https://www.youtube.com/watch?v=2WS1sG9fhOk"}, {"t": "Kinetic Energy", "url": "https://www.youtube.com/watch?v=eVW8X_TsBzE"}, {"t": "Potential Energy", "url": "https://www.youtube.com/watch?v=oGzwVYPxKjg"}, {"t": "Conservation of Energy", "url": "https://www.youtube.com/watch?v=kw_4Loo1HR4"}, {"t": "Power", "url": "https://www.youtube.com/watch?v=RpbxIG5HTf4"}],
  notes:[
    '<span class="gloss">Work（功）</span>: W = F·s·cosθ. Only counts when force AND displacement are in the same direction. Unit: Joule (J) = N·m.',
    '<b>Work = 0 in three situations:</b> (1) no displacement; (2) force perpendicular to displacement (cos90° = 0); (3) no force applied.',
    '<span class="gloss">Kinetic energy（动能）</span>: KE = ½mv². Energy of motion. Higher mass → more KE. Higher speed → much more KE (v²).',
    '<span class="gloss">Gravitational potential energy（重力势能）</span>: PE = mgh. Depends on height above a reference point (usually ground).',
    '<b>Conservation of energy（机械能守恒）</b>: In the absence of friction, total mechanical energy (KE + PE) stays constant.',
    '<span class="gloss">Power（功率）</span>: P = W/t = energy transferred per second. Unit: Watt (W) = J/s. 1 kW = 1000 W.',
    '<b>Work-energy theorem:</b> Net work done = change in kinetic energy. W_net = ΔKE = ½mv₂² − ½mv₁².'
  ],
  practice:[
    {q:'A force of 50 N pushes a box 4 m along the floor. How much work is done in J?', type:'fill', ans:'200', sol:'W = F × s = 50 N × 4 m = 200 J. (If force at an angle: W = F·s·cosθ. If horizontal: cos0°=1, W=200 J.)'},
    {q:'A 2 kg ball is thrown upward at 10 m/s. What is its maximum height? (g = 10 N/kg)', type:'mc', opts:[{v:'A',t:'5 m'},{v:'B',t:'10 m'},{v:'C',t:'2.5 m'},{v:'D',t:'1 m'}], ans:'A', sol:'At max height, v = 0. KE at start = ½×2×10² = 100 J. This becomes PE = mgh. 100 = 2×10×h → h = 5 m.'},
    {q:'Fill: a car speeds up from 10 m/s to 20 m/s. Its kinetic energy increases by a factor of ________.', type:'fill', ans:'4', sol:'KE ∝ v². v² doubles: 10²=100, 20²=400. 400/100 = 4. Doubling speed quadruples kinetic energy. This is why high-speed crashes are so much more destructive.'}
  ],
  quiz:[
    {q:'A person carries a 10 kg bag for 100 m on flat ground. How much work is done on the bag?', type:'mc', opts:[{v:'A',t:'1000 J'},{v:'B',t:'0 J（无位移方向有力）'},{v:'C',t:'100 J'},{v:'D',t:'10 J'}], ans:'B', sol:'Work requires force in the direction of displacement. The support force is vertical (up), displacement is horizontal. W = F·s·cos90° = F·s×0 = 0 J.'},
    {q:'Fill: a pendulum swings from its lowest point to its highest point. Its speed ________ and its potential energy ________.', type:'fill', ans:'decreases; increases', sol:'At lowest point: max speed (max KE), min height (min PE). At highest point: min speed (min KE), max height (max PE). Energy transfers from KE to PE (and back).'},
    {q:'An electric motor lifts a 200 kg load 5 m in 10 s. What is the power output? (g = 10 N/kg)', type:'mc', opts:[{v:'A',t:'100 W'},{v:'B',t:'1000 W'},{v:'C',t:'10000 W'},{v:'D',t:'2000 W'}], ans:'B', sol:'Work = mgh = 200×10×5 = 10000 J. Power = W/t = 10000/10 = 1000 W = 1 kW.'}
  ]
},
{ id:'Ch11_简单机械', unit:'第十一章', grade:'八年级下册', coverage:'p',
  title:'Ch11 简单机械 · Simple Machines',
  think:'A construction worker uses a crowbar to lift a 500 N rock with only 100 N of effort. Where does the extra lifting force come from? Does this violate conservation of energy — or is something else going on?',
  videos:[{"t": "Simple Machines", "url": "https://www.youtube.com/watch?v=dvEVYrSUYJM"}, {"t": "Lever Mechanical Advantage", "url": "https://www.youtube.com/watch?v=0HSJx3CHZJ4"}, {"t": "Two Masses on Pulley", "url": "https://www.youtube.com/watch?v=BrLbtCnrPaA"}, {"t": "WheelAxle and Pulleys", "url": "https://www.youtube.com/watch?v=lRixcLBC3kQ"}, {"t": "Inclined Planes and Wedges", "url": "https://www.youtube.com/watch?v=WJecWH3cKLY"}, {"t": "Supplement What are Simple Machines", "url": "https://www.youtube.com/watch?v=obSJFsodXVk"}, {"t": "Supplement Mechanical Advantage", "url": "https://www.youtube.com/watch?v=KZmccAy9wNQ"}, {"t": "Supplement Mechanical Efficiency", "url": "https://www.youtube.com/watch?v=Ab9CexEFwSY"}],
  notes:[
    'Six <span class="gloss">simple machines（简单机械）</span>: lever（杠杆）, pulley（滑轮）, wheel and axle（轮轴）, inclined plane（斜面）, wedge（劈）, screw（螺旋）.',
    '<span class="gloss">Mechanical advantage（机械优势）</span>: MA = F_out/F_in = input force ratio. >1 means you get more force out than you put in.',
    '<b>But:</b> no machine gives you something for free. You always do the same or more work (energy). MA > 1 → you lift farther or at slower speed.',
    '<b>Lever（杠杆）</b>: MA = effort arm / load arm. Fulcrum in middle: balanced (等臂). Load near fulcrum: effort small (省力).',
    '<b>Fixed pulley（定滑轮）</b>: changes direction only, MA = 1. <b>Movable pulley（动滑轮）</b>: MA = 2. <b>Block and tackle（滑轮组）</b>: MA = number of supporting ropes.',
    '<b>Inclined plane:</b> MA = length of slope / height = L/h. Longer slope → less effort needed → but you travel farther.',
    '<span class="gloss">Mechanical efficiency（机械效率）</span>: η = W_useful / W_total × 100%. Always < 100% because of friction.'
  ],
  practice:[
    {q:'An inclined plane is 6 m long and 2 m high. What is the mechanical advantage?', type:'fill', ans:'3', sol:'MA = L/h = 6/2 = 3. A force of 100 N can lift a load of up to 300 N. But: you must push 6 m to lift 2 m. Work in = work out (ignoring friction).'},
    {q:'A block and tackle has 4 supporting ropes. What is the mechanical advantage?', type:'mc', opts:[{v:'A',t:'2'},{v:'B',t:'4（拉力为重力的1/4）'},{v:'C',t:'1'},{v:'D',t:'8'}], ans:'B', sol:'Each rope shares the load. 4 ropes → each carries 1/4 of the load. Effort = Load/4 = W/4. MA = 4.'},
    {q:'Fill: a screw is essentially a cylinder wrapped around an inclined plane. The mechanical advantage of a screw relates the circumference of the handle to the ________.', type:'fill', ans:'pitch', sol:'A screw is an inclined plane wrapped in a spiral. Each full turn advances the screw by the pitch (螺距). MA = handle circumference / pitch.'}
  ],
  quiz:[
    {q:'A worker uses a lever to lift a 400 N rock. The effort arm is 4 times the load arm. What minimum effort force is needed?', type:'mc', opts:[{v:'A',t:'100 N（400÷4）'},{v:'B',t:'1600 N'},{v:'C',t:'400 N'},{v:'D',t:'200 N'}], ans:'A', sol:'MA = effort arm / load arm = 4. F_effort = F_load / MA = 400/4 = 100 N. Minimum 100 N needed (ignoring friction).'},
    {q:'Fill: mechanical efficiency η = ________ / W_total × 100%.', type:'fill', ans:'W_useful', sol:'η = W_useful/W_total. W_total = W_useful + W_friction. Friction always makes η < 100%. The lower the friction, the closer η is to 100%.'},
    {q:'Which gives the greatest mechanical advantage?', type:'mc', opts:[{v:'A',t:'Fixed pulley'},{v:'B',t:'Single movable pulley'},{v:'C',t:'Inclined plane 10 m long, 1 m high'},{v:'D',t:'Wheelbarrow'}], ans:'C', sol:'Fixed pulley: MA=1. Movable pulley: MA=2. Inclined plane: MA = 10/1 = 10. Wheelbarrow is a compound machine. The inclined plane with L=10m, h=1m gives MA=10, the greatest of these.'}
  ]
},
];