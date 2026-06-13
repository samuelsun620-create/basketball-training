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

    // ==================== 防守步法（新增分类） ====================
    {
        id: 4,
        name: '[待补充] 横向防守步',
        category: '防守步法',
        difficulty: 'easy',
        mantra: '📝 待编写',
        description: '防守基础之一，学习如何正确移动脚步跟防对手横向运动。',
        steps: [
            { title: '步骤 1', detail: '[待填充] 首先...' },
            { title: '步骤 2', detail: '[待填充] 然后...' },
        ],
        commonMistakes: [
            '[待填充] 常见错误 1',
            '[待填充] 常见错误 2',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/6366f1?text=Lateral+Defense+GIF&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="待补充视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    {
        id: 5,
        name: '[待补充] 贴身防守与手臂位置',
        category: '防守步法',
        difficulty: 'medium',
        mantra: '📝 待编写',
        description: '学习如何在不犯规的前提下贴身防守，合理运用手臂位置。',
        steps: [
            { title: '准备姿势', detail: '[待填充]' },
            { title: '手臂防守', detail: '[待填充]' },
        ],
        commonMistakes: [
            '[待填充]',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/6366f1?text=Tight+Defense+GIF&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="待补充视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    // ==================== 对抗技术（新增分类） ====================
    {
        id: 6,
        name: '[待补充] 挡拆配合',
        category: '对抗技术',
        difficulty: 'hard',
        mantra: '📝 待编写',
        description: '学习进攻端如何利用挡拆创造空间和投篮机会。',
        steps: [
            { title: '步骤 1', detail: '[待填充]' },
            { title: '步骤 2', detail: '[待填充]' },
        ],
        commonMistakes: [
            '[待填充]',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/a855f7?text=Pick+and+Roll+GIF&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="待补充视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    {
        id: 7,
        name: '[待补充] 防挡拆的换防与夹防',
        category: '对抗技术',
        difficulty: 'hard',
        mantra: '📝 待编写',
        description: '防守端如何高效应对挡拆进攻。',
        steps: [
            { title: '步骤 1', detail: '[待填充]' },
        ],
        commonMistakes: [
            '[待填充]',
        ],
        imageUrl: 'https://placehold.co/800x500/1e293b/a855f7?text=Defend+Pick+and+Roll+GIF&font=oswald',
        videoEmbed: `<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="待补充视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },

    // ==================== 进阶组合（新增分类） ====================
    {
        id: 8,
        name: '跨界持球单打',
        category: '进阶组合',
        difficulty: 'hard',
        mantra: '速度控制 · 节奏变化 · 空间创造',
        description: '现代篮球的核心进攻手段。通过控制节奏、变向、背身等技术组合，从侧翼或高位创造出手机会。适合小前锋和后卫掌握。',
        steps: [
            { title: '接球站位', detail: '在侧翼或高位（距离篮筐4-6米）接球，双脚与肩同宽，膝盖微屈，身体正对防守者。保持低重心，眼睛观察防守压力。' },
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
