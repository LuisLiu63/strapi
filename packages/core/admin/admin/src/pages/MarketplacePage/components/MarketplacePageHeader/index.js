import React from 'react';
import { useIntl } from 'react-intl';
import { HeaderLayout } from '@strapi/design-system/Layout';
import { LinkButton } from '@strapi/design-system/LinkButton';
import Upload from '@strapi/icons/Upload';
import { useTracking } from '@strapi/helper-plugin';

const MarketplacePageHeader = () => {
  const { formatMessage } = useIntl();
  const { trackUsage } = useTracking();

  return (
    <HeaderLayout
      title={formatMessage({
        id: 'global.marketplace',
        defaultMessage: 'Marketplace',
      })}
      subtitle={formatMessage({
        id: 'admin.pages.MarketPlacePage.subtitle',
        defaultMessage: 'Get more out of Strapi',
      })}
      primaryAction={
        <LinkButton
          startIcon={<Upload />}
          variant="tertiary"
          href="https://market.strapi.io/submit-plugin"
          onClick={() => trackUsage('didSubmitPlugin')}
        >
          {formatMessage({
            id: 'admin.pages.MarketPlacePage.submit.plugin.link',
            defaultMessage: 'Submit your plugin',
          })}
        </LinkButton>
      }
    />
  );
};

export default MarketplacePageHeader;
