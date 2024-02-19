import { Icons } from '@/assets/icons'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const HowToAndGithub = () => {
	const { t } = useTranslation()
	return (
		<div className='container mt-40 bg-grey-background-banner h-[435px] w-full max-w-[1320px] rounded-[10px]'>
			<div className='container grid grid-cols-1 sm:grid-cols-3 gap-5 pt-20 pl-20 w-full'>
				<div className='flex flex-col items-left'>
					<Icons.HowInventoryIsDone className='h-[48px] w-[48px]' />
					<h3 className='text-black font-bold pt-2'>{t('translations:inventoryToolUserManualTitle')}</h3>
					<div className='text-black mx-auto pt-5 pr-3'>
						<Link className='font-extrabold text-primary hover:underline' to="/user-manual ">User manual</Link> usce non accumsan mauris. Duis pretium
						rutrum ipsum, a bibendum libero convallis eget.
					</div>
				</div>
				<div className='flex flex-col items-left'>
					<Icons.HowThisWorksVideo className='h-[48px] w-[48px]' />
					<h3 className='text-black font-bold'>How This Works Video</h3>
					<div className='text-black mx-auto pt-5 pr-3'>
						Watch a video of how the inventory digital tool works usce non
						accumsan mauris. Duis pretium rutrum ipsum, a bibendum libero
						convallis eget.
					</div>
				</div>
				<div className='flex flex-col items-left'>
					<Icons.Github className='h-[48px] w-[48px]' />
					<h3 className='text-black font-bold'>GitHub</h3>
					<div className='text-black mx-auto pt-5 pr-3'>
						OpenSource usce non accumsan mauris. Duis pretium rutrum ipsum, a
						bibendum libero convallis eget.
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowToAndGithub
