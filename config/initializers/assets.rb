# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

Rails.application.config.assets.precompile += %w(navbar.css)
Rails.application.config.assets.precompile += %w(home.css)
Rails.application.config.assets.precompile += %w(footer.css)
Rails.application.config.assets.precompile += %w(about.css)
Rails.application.config.assets.precompile += %w(appinfo.css)
Rails.application.config.assets.precompile += %w(profile.css)
Rails.application.config.assets.precompile += %w(update.css)
Rails.application.config.assets.precompile += %w(events_list.css)
Rails.application.config.assets.precompile += %w(login.css)
Rails.application.config.assets.precompile += %w(signup.css)
Rails.application.config.assets.precompile += %w(forgot-password.css)
Rails.application.config.assets.precompile += %w(modal.css)
Rails.application.config.assets.precompile += %w(terms.css)
Rails.application.config.assets.precompile += %w(privacy.css)
Rails.application.config.assets.precompile += %w(press.css)




# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
