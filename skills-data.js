/**
 * Vibe Hoops · 篮球技术动作知识库
 * 完整的 Skill Map 结构，支持分类和逐步扩展
 */

const CATEGORY_ORDER = [
    '控球基础',
    '投篮定型',
    '突破脚步',
    '防守步法',      // 新增分类
    '对抗技术',      // 新增分类
    '进阶组合',      // 新增分类
];

const CATEGORY_ICONS = {
    '控球基础': '🏀',
    '投篮定型': '🎯',
    '突破脚步': '⚡',
    '防守步法': '🛡️',
    '对抗技术': '💪',
    '进阶组合': '🔥',
};

const skillsData = [
    // ==================== 控球基础 ====================
    {
        id: 1,
        name: '艾弗森 Crossover 变向',
        category: '控球基础',
        difficulty: 'hard',
        mantra: '速度 · 节奏 · 重心转移',
        description: 'AI 标志性的体前变向突破，核心在于用节奏欺骗防守、用重心转移创造突破空间。',
        steps: [
            { title: '起始推进', detail: '右手运球向防守者推进，重心偏右侧，保持低重心与护球手就绪。' },
            { title: '减速虚晃', detail: '右手运球突然减速，肩髋同步向右倾斜，制造「要向右突破」的假象。' },
            { title: '快速变向', detail: '左手在身体前方快速接球，触球幅度小而快，重心瞬间切向左侧。' },
            { title: '加速突破', detail: '右脚蹬地爆发，左手加速运球，第一时间超越防守者冲向篮筐。' },
        ],
        commonMistakes: [
            '变向节奏不够突然 — 防守者不会被晃开',
            '重心过高或晃动过大 — 失去平衡，变向后踉跄',
            '二次触球过高 — 容易被掏球',
            '变向后不加速 — 防守者轻松追防',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/ec4899?text=Iverson+Crossover+GIF&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/2Z36EhFkbOU" title="艾弗森 Crossover" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    // ==================== 投篮定型 ====================
    {
        id: 2,
        name: '库里投篮手型定型',
        category: '投篮定型',
        difficulty: 'medium',
        mantra: '肩 · 肘 · 腕 · 指，一条直线',
        description: '学习 NBA 三分王库里的标准投篮手型，从准备到出手的完整定型流程，适合新手建立稳定出手习惯。',
        steps: [
            { title: '准备姿势', detail: '双脚与肩同宽，膝盖微屈。球置于腰际，双手呈「V」字握球，肘部贴近身体两侧。' },
            { title: '上升阶段', detail: '腿部向上蹬地发力，同时手臂同步上举。肘部保持在肩正下方，避免外八。' },
            { title: '发力顶点', detail: '在最高点短暂停驻，肩·肘·腕·指保持一条竖直线。视线锁定篮筐中心。' },
            { title: '出手与跟投', detail: '手腕快速下压翻腕，食指与中指最后离球。出手带后旋，形成柔和「蛋形」弧线。' },
        ],
        commonMistakes: [
            '肘部外八 — 投篮轨迹不稳定，容易左右偏移',
            '蹬腿不充分 — 射程不足，容易投短',
            '出手点过低 — 易被干扰或封盖',
            '手腕僵硬 — 旋转不足，变成「菜花球」',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/818cf8?text=Curry+Shot+Form+GIF&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/HoCwa6gnmM0" title="库里投篮教学" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    // ==================== 突破脚步 ====================
    {
        id: 3,
        name: '欧洲步上篮',
        category: '突破脚步',
        difficulty: 'easy',
        mantra: '脚步 · 节奏 · 护球',
        description: '吉诺比利标志动作，利用两步内的左右变向骗过协防，是篮下终结的经典脚步技巧。',
        steps: [
            { title: '助跑启动', detail: '从三分线内两步助跑接近篮筐，第一步大步，第二步准备起跳或变向。' },
            { title: '第一步变向', detail: '第二步落地时，身体向右摆动，诱导防守者以为你要从右侧上篮。' },
            { title: '第二步变向', detail: '迅速向左跨步，用身体贴住防守者形成对抗，同时护球手打开。' },
            { title: '柔和出手', detail: '靠近篮筐后用指尖轻拨，控制旋转与落点，注意避免走步违例。' },
        ],
        commonMistakes: [
            '走步违例 — 欧洲步最常见问题，需严格数清步数',
            '护球不足 — 变向过程中容易被切球',
            '两次变向节奏雷同 — 无法骗过协防球员',
            '出手过硬 — 打板弹飞，缺乏手感控制',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/34d399?text=Euro+Step+Layup+GIF&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/NiN5kpCn9hU" title="欧洲步教学" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    // ==================== 防守步法 ====================
    {
        id: 4,
        name: '横向防守步（滑步防守）',
        category: '防守步法',
        difficulty: 'easy',
        mantra: '低重心 · 脚不交叉 · 眼盯球',
        description: '防守基础之一，学习如何用正确的脚步技巧跟防对手横向运动，保持防守位置的同时避免被晃过。是一对一防守的核心技能。',
        steps: [
            { title: '防守准备姿势', detail: '两脚分开与肩同宽，膝盖弯曲降低重心，上身微微前倾。双臂张开保持防守宽度，眼睛盯住对方腰部（核心位置）。' },
            { title: '侧向移动启动', detail: '当对手向右推进时，用左脚蹬地向右滑动。第一步要快速有力，脚尖始终指向防守方向，保持身体平衡。' },
            { title: '滑步连贯性', detail: '滑步时脚永不交叉，采用「一脚蹬，一脚跟」的节奏。右脚蹬地后，左脚立即跟上，收回到与肩同宽的位置。' },
            { title: '防守位置维护', detail: '始终保持身体正对进攻者，双腿微屈随时准备横向变向或垂直起跳。手臂防守不犯规，避免手臂伸得过长而被吹防守犯规。' },
        ],
        commonMistakes: [
            '脚步交叉 — 移动速度变慢，容易被突破',
            '重心过高 — 失去稳定性，容易被撞倒或甩开',
            '眼睛跟着球运动 — 忽视对手身体意图，反应滞后',
            '防守距离过远 — 无法有效干扰对手进攻，给予太多进攻空间',
            '脚步后撤过度 — 对手可能乘机突破上篮，需要主动压迫',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/6366f1?text=Lateral+Defense+Slide&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/EHdZ_Tpr0xE" title="防守滑步教学" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    {
        id: 5,
        name: '贴身防守与手臂位置',
        category: '防守步法',
        difficulty: 'medium',
        mantra: '距离 · 手位 · 不犯规',
        description: '学习如何在不犯规的前提下有效地贴身防守，合理运用手臂和身体位置来干扰对方进攻，是进阶防守的重要技能。',
        steps: [
            { title: '防守距离控制', detail: '与进攻者保持一个手臂长度的距离（约45厘米）。距离太近容易被晃过或犯规，距离太远无法有效干扰。根据对手速度和投篮能力灵活调整。' },
            { title: '手臂防守位置', detail: '两臂张开呈「V」形或「Y」形，一只手臂对应对手持球位置（约胸口高度），另一只手臂在下方防守传球路线。手臂要自然放松，随时准备切球。' },
            { title: '身体贴防技巧', detail: '用身体侧面贴住对手，保持平衡和移动灵活性。当对手试图变向时，立即转身跟随，用屁股轻轻贴住对手腰部，不构成身体犯规。' },
            { title: '防守犯规规则认知', detail: '避免手臂过度伸展导致接触对手手臂。不要从侧后方推对手，也不要在对手起跳前碰对手。学会如何在合法范围内进行身体对抗和手臂防守。' },
        ],
        commonMistakes: [
            '手臂过度伸展 — 容易被吹防守犯规，给对方罚球机会',
            '距离过近导致身体碰撞 — 非法防守犯规，特别是在三秒区',
            '眼睛跟球不跟人 — 对手变向时反应不足',
            '防守站位不当 — 给对手进攻空间或遮挡裁判视线',
            '持续贴防导致体力消耗过快 — 需要学会间歇式防守节奏',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/6366f1?text=Tight+Defense+Arms&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/Nz6S5DmLXNo" title="贴身防守技巧" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    {
        id: 11,
        name: '追防与回防（转身防守）',
        category: '防守步法',
        difficulty: 'medium',
        mantra: '速度 · 转身 · 位置感',
        description: '当对手突破或错位时，如何快速转身追防，以及如何从后场快速回防阻止对手快攻。是防守全面性的重要指标。',
        steps: [
            { title: '识别突破信号', detail: '观察对手的运球速度和身体姿态。当对手加速突破时，立即判断其移动方向和速度，准备转身追防。' },
            { title: '快速转身技术', detail: '选择转身方向：通常向防守者身后更近的一侧转身。转身时双脚快速交叉转向，上身跟随转动，眼睛不离开对手。' },
            { title: '追防的第一步爆发', detail: '转身后用靠近对手的那条腿蹬地爆发，快速追赶。第一步要快且有力，缩小与对手的距离，争取在三秒区前完成防守位置。' },
            { title: '回防阵地与协防', detail: '当失球后立即回防，向篮筐方向快速移动。若对手距离篮筐太近无法完全阻止，则与队友配合进行协防。根据球的位置和队友防守情况调整站位。' },
        ],
        commonMistakes: [
            '转身方向错误 — 选择了更远的转身方式，浪费时间被对手甩开',
            '追防距离过远 — 无法及时回到防守位置，对手轻松上篮',
            '追防过于激进 — 容易被罚出场或在禁区内犯规',
            '回防意识不足 — 反应太慢，对手已经完成快攻',
            '协防位置不当 — 导致其他防守空位，被传球助攻',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/6366f1?text=Chase+Defense+Transition&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/dBkj3jxKcNM" title="追防与回防教学" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    // ==================== 对抗技术 ====================
    {
        id: 6,
        name: '挡拆进攻配合（Pick & Roll）',
        category: '对抗技术',
        difficulty: 'hard',
        mantra: '配合 · 节奏 · 空间创造',
        description: '现代篮球进攻端最核心的战术组合。通过队友设置掩护来创造进攻空间和投篮机会。掌握此技能可大幅提升进攻威胁。',
        steps: [
            { title: '持球者启动', detail: '控球后卫从侧翼或高位持球，向设置掩护的队友方向移动。保持运球高度和速度，眼睛观察防守者的反应，准备利用掩护。' },
            { title: '掩护队友位置', detail: '大个子球员在持球者前方2-3米处设置掩护。掩护者要静止站立，身体正对防守者，用身体形成屏障，但不能主动移动或碰撞。' },
            { title: '持球者利用掩护', detail: '持球者紧贴掩护队友的身体突破，快速变向或加速突破。选择突破方向时要看防守者的选择：如果防守者绕前防守，则向掩护者后方突破。' },
            { title: '掩护后的选择', detail: '掩护者设置掩护后立即拆出到篮筐。如果被夹防，持球者可传球给拆出的队友；如果防守没有夹防，持球者可继续突破上篮或传球给其他空位队友。' },
        ],
        commonMistakes: [
            '掩护设置不当 — 位置太远，起不到有效掩护作用',
            '持球者利用掩护时机不对 — 掩护还未完全建立就开始突破',
            '掩护者设置后移动过快 — 裁判吹掩护进攻犯规',
            '球员间距过大 — 传球时间过长，防守者有足够时间反应',
            '拆出球员站位不对 — 接球位置被防守者卡住，难以接球终结',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/a855f7?text=Pick+and+Roll+Offensive&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/hc0X8Mq65Fo" title="挡拆进攻战术" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    {
        id: 7,
        name: '防挡拆的换防与夹防',
        category: '对抗技术',
        difficulty: 'hard',
        mantra: '沟通 · 换位 · 时机',
        description: '防守端如何高效应对对方挡拆进攻。掌握换防（switch）、夹防（trap）和绕防（go-over）的时机和技巧，是现代防守的必修课。',
        steps: [
            { title: '防守准备与沟通', detail: '看到对方即将设置掩护时，与队友进行口头沟通。根据进攻方式和球员特点，事先制定防守策略。确保每个防守球员都清楚自己的职责。' },
            { title: '换防执行（Switch）', detail: '当掩护完全建立后，防守掩护者的球员快速移动到防守持球者的位置。同时，防守持球者的球员退后防守拆出的大个子。换防时要有声音沟通「换人」。' },
            { title: '夹防配合（Trap）', detail: '在关键位置（如罚球线、三秒���边缘）用两个防守球员夹住持球者。夹防的两人要封锁传球路线，迫使对手传球或失误。夹防后立即补防其他空位球员。' },
            { title: '绕防与反应时间', detail: '如果对手运球能力较强，可选择绕防（go-over），即防守者绕过掩护继续跟防持球者。这需要防守速度快且位置意识强。否则及时换防是更稳妥的选择。' },
        ],
        commonMistakes: [
            '换防沟通不足 — 防守球员互相推诿，形成防守空位',
            '换防后位置不当 — 新防守球员无法有效防守被分配的对手',
            '夹防过于贪心 — 被对手快速传球破解，反而给对手更多助攻机会',
            '夹防后补防不及时 — 其他空位队友轻松得分',
            '绕防选择不对 — 对手速度快导致被突破，应该坚定换防',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/a855f7?text=Defend+Pick+and+Roll&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/O-l-B0C0qKc" title="防挡拆战术教学" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    {
        id: 12,
        name: '身体对抗与卡位技术',
        category: '对抗技术',
        difficulty: 'hard',
        mantra: '屁股 · 腿 · 不犯规',
        description: '在篮下争抢篮板球和防守对手进攻时，如何合法地使用身体进行对抗和卡位。这是内线球员必备的技能，也是低位防守的核心。',
        steps: [
            { title: '低位卡位准备', detail: '当对手试图进入篮下时，提前占据有利位置。用身体挡在对手和篮筐之间，膝盖弯曲降低重心，双脚与肩同宽保持平衡。' },
            { title: '身体接触技巧', detail: '用屁股和腰部对应对手的身体，轻轻贴住。不要用手推或肘击，让身体自然接触形成屏障。如果对手试图绕过，立即侧身调整位置。' },
            { title: '篮板争抢的对抗', detail: '跳起争抢篮板前，先用身体贴住对手防止其起跳。起跳时用手臂保护篮板球，避免被对手拍掉。落地时控制身体，不要跳后砸在对手身上。' },
            { title: '违例与犯规规则认知', detail: '了解进攻犯规（offensive foul）和防守犯规（defensive foul）的界限。防守时提前占据位置是合法的，但不能移动重心或伸展手臂推人。' },
        ],
        commonMistakes: [
            '手臂过度伸展 — 容易被吹防守犯规，特别是在禁区内',
            '身体重心前倾 — 失去平衡，容易在对抗中倒地',
            '防守位置不当 — 给对手直线突破的机会，起不到卡位作用',
            '对抗力度过大 — 被判进攻犯规，失去篮板球或进攻机会',
            '篮板争抢时转身过猛 — 容易碰撞对手或被吹犯规',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/a855f7?text=Boxout+Positioning&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/M7Bro4U0pgs" title="卡位与对抗技术" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    // ==================== 进阶组合 ====================
    {
        id: 8,
        name: '跨界持球单打',
        category: '进阶组合',
        difficulty: 'hard',
        mantra: '速度控制 · 节奏变化 · 空间创造',
        description: '现代篮球的核心进攻手段。通过控制节奏、变向、背身等技术组合，从侧翼或高位创造出手机会。适合小前锋和后卫掌握。',
        steps: [
            { title: '接球站位', detail: '在侧翼或高位（距离篮筐4-6米）接球，双脚与肩同宽，膝盖微屈，身体正对防守者。保持低重心，眼睛观察防守球员动向。' },
            { title: '节奏减速', detail: '通过第一步减速虚晃，让防守者产生犯规嫌疑。左右摇晃上身，制造「将要突破」的假象，迫使防守者重心前移。' },
            { title: '背身对抗', detail: '如果防守者贴身，立即转身背对防守者，用身体形成屏障。通过低位背打创造分球空间或直接上篮。' },
            { title: '快速出手', detail: '利用防守者重心失衡的瞬间，做出投篮、传球或突破的选择。三威胁（投篮、突破、传球）要灵活切换。' },
        ],
        commonMistakes: [
            '节奏过快 — 防守者来不及反应，反而给予对方机会',
            '身体对抗不足 — 容易被防守者贴防，失去进攻空间',
            '低头运球 — 视野变窄，无法发现传球机会',
            '出手动作过大 — 容易被封盖，消耗体力',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/f97316?text=ISO+Play+One+on+One&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/hTqNfOFWbRE" title="NBA 单打技巧" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    {
        id: 9,
        name: '快攻与反快攻',
        category: '进阶组合',
        difficulty: 'medium',
        mantra: '速度 · 站位 · 决策',
        description: '团队级别的过渡进攻战术。从防守转换到进攻的3秒内形成快攻，或防守端快速回防阻止对方快攻。是现代篮球节奏的关键。',
        steps: [
            { title: '防守端抢位', detail: '防守时积极卡位、抢篮板球。一旦获得球权，立即寻找第一传机会。与后卫建立眼神交流，准备快速推进。' },
            { title: '快速推进', detail: '获得球后，用最少传次（1-2次）快速推向前场。控球后卫领头，两侧翼手跑动。整个过程控制在 8-10 秒内。' },
            { title: '阵形选择', detail: '保持3人快攻的标准站位：中路控球者、左翼和右翼平行推进。根据防守位置灵活调整（2对1、2对2 等）。' },
            { title: '终结进攻', detail: '接近篮筐时做出投篮、扣篮或助攻的决策。若防守回防及时，立即停球组织阵地进攻。' },
        ],
        commonMistakes: [
            '推进过慢 — 被防守者回防阻止，快攻失效',
            '传球过多 — 多余传球浪费快攻时间',
            '位置拥挤 — 三人跑动路线冲突，出现失误',
            '贸然出手 — 忽视空位队友，单打损失得分机会',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/f97316?text=Fast+Break+Transition&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/Q2PmJd0QZPE" title="快攻训练教学" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    {
        id: 10,
        name: '三分球射手技巧',
        category: '进阶组合',
        difficulty: 'hard',
        mantra: '距离 · 速度 · 稳定性',
        description: '现代篮球的定义技能。掌握从三分线外稳定投篮的方法，包括定点投篮、运球投篮、接球即投等场景下的出手技巧。',
        steps: [
            { title: '定点投篮基础', detail: '双脚与肩同宽站在三分线外，脚尖对准篮筐。将球举起到眼睛水平线，肘部贴近身体，保持「V」字握球形状。' },
            { title: '蹬腿发力', detail: '腿部向下弯曲，储备向上的力量。然后快速伸直腿部，向上跳起，同时手臂向上举起。整个过程要连贯，避免停顿。' },
            { title: '腕部翻腕', detail: '在最高点时，手腕快速向下翻转，食指和中指最后离球。球应该旋转向后，形成稳定的后旋轨迹。' },
            { title: '应对防守', detail: '面对防守时，用变速运球和突然停止来甩开防守者。接球即投时，要快速判断空间，在防守者起跳前完成出手。' },
        ],
        commonMistakes: [
            '重心不稳 — 跳起后身体摇晃，出手线路偏离',
            '肘部外八 — 导致投篮轨迹不稳定，容易左右偏',
            '出手点过低 — 易被长臂防守者干扰',
            '运球后出手节奏紊乱 — 防守紧逼时急躁，出手不稳',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/f97316?text=Three+Point+Shooting&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/Q3O3cCuXU4E" title="三分球训练教程" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },
];
