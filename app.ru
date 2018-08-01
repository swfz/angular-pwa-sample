# encoding: utf-8

# class SimpleServer
#   def call(env)
#     [
#       200,
#       {'Content-Type' => 'text/plain;charset=utf-8'},
#       ['ok']
#     ]
#   end
# end


use Rack::Static, :urls => ["/"]
run lambda {|env|}

# run SimpleServer.new
