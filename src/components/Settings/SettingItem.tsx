import { useColorScheme } from '@mui/joy';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Switch from '@mui/joy/Switch';
import React, { FC, ReactNode } from 'react';
import { SettingId, ThemeSetting, ValidationSetting } from 'src/@types/types';
import { switchSx } from 'src/utils/muiSx';

type SettingItemProps = {
  setting: ValidationSetting;
  toggleIsActive: (id: SettingId, isActive: boolean) => void;
  children: ReactNode;
};

const SettingItem: FC<SettingItemProps> = ({
  setting,
  toggleIsActive,
  children,
}) => {
  const { mode, systemMode } = useColorScheme();

  const isDarkMode: boolean =
    mode === ThemeSetting.SYSTEM
      ? systemMode === ThemeSetting.DARK
      : mode === ThemeSetting.DARK;

  const thumbColor = isDarkMode
    ? 'var(--tolowercase-palette-neutral-900)'
    : '#fff';

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        rowGap: '1rem',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <FormLabel>{setting.label}</FormLabel>
        {setting.helperText && (
          <FormHelperText sx={{ mt: 0, fontSize: 10 }}>
            {setting.helperText}
          </FormHelperText>
        )}
      </Box>
      <FormControl orientation="horizontal" sx={{ justifySelf: 'right' }}>
        <Switch
          checked={setting.isActive}
          onChange={(event) => toggleIsActive(setting.id, event.target.checked)}
          sx={switchSx}
          componentsProps={{
            input: { 'aria-label': `toggle ${setting.label}` },
            thumb: {
              sx: {
                '--Switch-thumb-background': thumbColor,
              },
            },
          }}
        />
      </FormControl>
      {setting.isActive && children}
    </Box>
  );
};

export default SettingItem;
