/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const navigationItems: FuseNavigationItem[] = [
    {
        id   : 'menu1',
        title: '책무정보관리',
        subtitle: 'Responsibility Map List',
        type : 'collapsable',
        icon : 'heroicons_outline:table-cells',
        children: [
            {
                id: 'apps.example',
                title: '책무체계도 조회',
                type: 'basic',
                link: '/example',
                exactMatch: true,
            },
            {
                id: 'apps.responsibility-map',
                title: '책무기술서 관리',
                type: 'basic',
                link: '/responsibility-map',
            },
            {
                id: 'apps.help-center.guides',
                title: '책무정보 관리',
                type: 'basic',
                link: '/apps/help-center/guides',
            },
            {
                id: 'apps.help-center.support',
                title: '임원정보관리',
                type: 'basic',
                link: '/apps/help-center/support',
            },
            {
                id: 'apps.help-center.support',
                title: '회의체정보관리',
                type: 'basic',
                link: '/apps/help-center/support',
            },
            {
                id: 'apps.help-center.support',
                title: '조직정보관리',
                type: 'basic',
                link: '/apps/help-center/support',
            }
        ]
    }
];
