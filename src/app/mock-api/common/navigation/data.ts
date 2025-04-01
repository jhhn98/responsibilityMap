/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    /*{
        id  : 'menu0',
        title   : '템플릿 요소',
        subtitle    : 'template',
        type    : 'basic',
        icon    : 'heroicons_outline:table-cells',
        link    : '/template'
    },*/
    {
        id   : 'menu1',
        title: '책무정보관리',
        subtitle: 'Responsibility Map List',
        type : 'collapsable',
        icon : 'heroicons_outline:table-cells',
        children: [
            {
                id: 'apps.responsibilitySystem',
                title: '책무체계도 조회',
                type: 'basic',
                link: '/responsibility-system'
            },
            {
                id: 'apps.bankResponsibilityMap',
                title: '은행 책무기술서 관리',
                type: 'basic',
                link: '/bank-responsibility-map'
            },
            {
                id: 'apps.executiveResponsibilityMap',
                title: '임원 책무기술서 관리',
                type: 'basic',
                link: '/executive-responsibility-map'
            },
            {
                id: 'apps.accountabilityInformationManagement',
                title: '책무정보 관리',
                type: 'basic',
                link: '/accountability-information-management'
            },
            {
                id: 'apps.executiveInformationManagement',
                title: '임원정보관리',
                type: 'basic',
                link: '/executive-information-management'
            },
            {
                id: 'apps.meetingInformationManagement',
                title: '회의체정보관리',
                type: 'basic',
                link: '/meeting-information-management'
            },
            {
                id: 'apps.organizationManagement',
                title: '조직정보관리',
                type: 'basic',
                link: '/organization-management'
            },
        ],
    },
    {
        id   : 'menu2',
        title: '책무자료관리',
        subtitle: 'Responsibility Map Data',
        type : 'collapsable',
        icon : 'heroicons_outline:pencil-square',
        children: [
            {
                id: 'apps.help-center.home',
                title: '외부규정관리',
                type: 'basic',
                link: '/data',
                exactMatch: true,
            },
            {
                id: 'apps.help-center.faqs',
                title: '내부규정관리',
                type: 'basic',
                link: '/apps/help-center/faqs',
            },
            {
                id: 'apps.help-center.guides',
                title: '제제/해석사례',
                type: 'basic',
                link: '/apps/help-center/guides',
            },
            {
                id: 'apps.help-center.support',
                title: '책무동향',
                type: 'basic',
                link: '/apps/help-center/support',
            },
        ],
    },
    {
        id   : 'menu3',
        title: '이행점검관리',
        subtitle: 'Responsibility Checklist',
        type : 'collapsable',
        icon : 'heroicons_outline:square-3-stack-3d',
        children: [
            {
                id: 'apps.departmentManagement',
                title: '부서 관리조치 현황',
                type: 'basic',
                link: '/department-management',
                exactMatch: true,
            },
            {
                id: 'apps.statusImplementation',
                title: '관리조치 이행현황',
                type: 'basic',
                link: '/status-implementation',
            },
            {
                id: 'apps.executiveManagement',
                title: '임원 관리조치 점검',
                type: 'basic',
                link: '/executive-management',
            }
            /*{
                id: 'apps.help-center.support',
                title: '책무동향',
                type: 'basic',
                link: '/apps/help-center/support',
            },*/
        ]
    },
    {
        id   : 'menu4',
        title: '대시보드관리',
        subtitle: 'Responsibility Dashboard',
        type : 'collapsable',
        icon : 'heroicons_outline:chart-pie',
        children: [
            {
                id: 'apps.executiveDashboard',
                title: '임원별대시보드',
                type: 'basic',
                link: '/executive-dashboard',
                exactMatch: true,
            },
            {
                id: 'apps.ipmCheckDepartment',
                title: '부서별 내부통제활동',
                type: 'basic',
                link: '/ipm-check-department',
            },
            {
                id: 'apps.ipmCheckExecutive',
                title: '임원별 이행점검',
                type: 'basic',
                link: '/ipm-check-executive',
            },
            {
                id: 'bbs01',
                title: '공지사항',
                type: 'basic',
                link: '/board/bbs01',
            },
            {
                id: 'bbs02',
                title: '게시판예제',
                type: 'basic',
                link: '/board/bbs02',
            }
        ],
    },
    {
        id   : 'menu5',
        title: '보고서관리',
        subtitle: 'Report Management',
        type : 'collapsable',
        icon : 'heroicons_outline:briefcase',
        children: [
            {
                id: 'apps.help-center.home',
                title: '임원별대시보드',
                type: 'basic',
                link: '/data',
                exactMatch: true,
            },
            {
                id: 'apps.help-center.faqs',
                title: '이행점검현황',
                type: 'basic',
                link: '/apps/help-center/faqs',
            },
            {
                id: 'apps.help-center.guides',
                title: '책무정보현황',
                type: 'basic',
                link: '/apps/help-center/guides',
            },
        ],
    },
    {
        id   : 'menu6',
        title: '결재관리',
        subtitle: 'Approval List',
        type : 'collapsable',
        icon : 'heroicons_outline:clipboard-document-check',
        children: [
            {
                id: 'apps.help-center.home',
                title: '임원별대시보드',
                type: 'basic',
                link: '/data',
                exactMatch: true,
            },
            {
                id: 'apps.help-center.faqs',
                title: '이행점검현황',
                type: 'basic',
                link: '/apps/help-center/faqs',
            },
            {
                id: 'apps.help-center.guides',
                title: '책무정보현황',
                type: 'basic',
                link: '/apps/help-center/guides',
            },
        ],
    },
    {
        id   : 'menu7',
        title: '관리자',
        subtitle: 'Administrator',
        type : 'collapsable',
        icon : 'heroicons_outline:user-group',
        children: [
            {
                id: 'apps.help-center.home',
                title: '임원별대시보드',
                type: 'basic',
                link: '/data',
                exactMatch: true,
            },
            {
                id: 'apps.help-center.faqs',
                title: '이행점검현황',
                type: 'basic',
                link: '/apps/help-center/faqs',
            },
            {
                id: 'apps.help-center.guides',
                title: '책무정보현황',
                type: 'basic',
                link: '/apps/help-center/guides',
            },
        ],
    },

];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: '예제',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: '예제',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: '예제',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
